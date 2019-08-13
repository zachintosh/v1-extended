#!/bin/sh -l

curl -H "Content-Type: application/json" -X POST -d '{"username": "Github Actions", "content": "New changes to $GITHUB_REPOSITORY have been pushed to master"}' $DISCORD_WEBHOOK