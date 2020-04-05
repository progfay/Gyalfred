#!/bin/sh

exclude=''
while read pattern; do exclude="${exclude} ${pattern/\*/\*}"; done < .alfredignore
sh -c "rm Gyalfred.alfredworkflow; zip -r Gyalfred.alfredworkflow . -x ${exclude}"
