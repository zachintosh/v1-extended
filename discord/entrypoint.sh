#!/bin/sh -l

MESSAGE=`{"username": "Github Actions", "content": "New changes to ${GITHUB_REPOSITORY} have been pushed to master"}`

curl -H "Content-Type: application/json" -X POST -d $MESSAGE $DISCORD_WEBHOOK