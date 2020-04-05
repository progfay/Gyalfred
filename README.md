[![Image from Gyazo](https://i.gyazo.com/9e5c681ccf6acfabb12718e691f29de7.png)](https://gyazo.com/9e5c681ccf6acfabb12718e691f29de7)

Gyalfred is [Alfred Workflow](https://www.alfredapp.com/workflows/) for searching your captured images in gyazo.com.

[![Image from Gyazo](https://i.gyazo.com/0132c3dda1b04af265b430ab21c214c4.png)](https://gyazo.com/0132c3dda1b04af265b430ab21c214c4)

## Requirements

- [Alfred Powerpack](https://www.alfredapp.com/powerpack/)
- [Gyazo Pro](https://gyazo.com/pro)


## Install

1. Download [Gyalfred.alfredworkflow](https://github.com/progfay/Gyalfred/releases/latest/download/Gyalfred.alfredworkflow).
2. Open downloaded `.alfredworkflow` file.
3. Install Gyalfred to Alfred.


## Prepare

[![Image from Gyazo](https://i.gyazo.com/37c90f82fa6a794aabee546c45057a1d.jpg)](https://gyazo.com/37c90f82fa6a794aabee546c45057a1d)

You can get `Gyazo_session` from Cookie of gyazo.com.


## Usage

Keyword: `Gyazo [word]`

- `↵` : Open permalink of Gyazo image ( `https://gyazo.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` )
- `⌘ + ↵` : Copy permalink of Gyazo image ( `https://gyazo.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` )
- `⇧ + ↵` : Copy Gyazo image URL ( `https://gyazo.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.png` )
- `⌃ + ↵` : Copy Gyazo image URL as Markdown ( `[![Image from Gyazo](https://i.gyazo.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.jpg)](https://gyazo.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx)` )
- `⌥ + ` : Open search page in gyazo.com ( `https://gyazo.com/search/[word]` )
- [Quick Look](https://www.alfredapp.com/help/features/previews/) : Preview Gyazo image ( `https://gyazo.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.png` )


## For Developer

### Build

To make `Gyalfred.alfredworkflow` ,

```sh
./build.sh
```

If you don't want to include any file for build, add file matching pattern to `.alfredignore`


