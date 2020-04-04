const alfy = require('alfy')
const fetch = require('node-fetch')
const fs = require('fs')

const main = async () => {
  const response = await fetch(
    `https://gyazo.com/api/internal/search_result?page=1&per=10&query=${encodeURIComponent(alfy.input)}`,
    {
      headers: {
        cookie: `Gyazo_session=${process.env.Gyazo_session}`
      }
    }
  )
  const { captures } = await response.json()

  Promise.all(
    captures.map(
      ({ image_id }) => {
        return new Promise((resolve, reject) => {
          if (fs.existsSync(`./thumb/${image_id}`)) return resolve()
          fetch(`https://gyazo.com/${image_id}/thumb/128`)
            .then(res => {
              const fileStream = fs.createWriteStream(`thumb/${image_id}`)
              res.body.pipe(fileStream)
              res.body.on('error', (err) => { reject(err) })
              fileStream.on('finish', () => { resolve() })
            })
        })
      }
    )
  )

  alfy.output(
    captures.map(
      capture => ({
        title: (capture.metadata && capture.metadata.title) || capture.desc || capture.created_at,
        subtitle: capture.permalink_url,
        arg: capture.permalink_url,
        icon: { path: `./thumb/${capture.image_id}` }
      })
    )
  )
}

main()
