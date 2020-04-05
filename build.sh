#!/bin/sh

app_name=Gyalfred
exclude=''

while read pattern
do
	exclude="${exclude} ${pattern/\*/\*}"
done < .alfredignore

sh -c "zip -r ${app_name}.alfredworkflow . -x ${exclude}"

