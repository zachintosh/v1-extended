#!/bin/sh -l

curl -H "Content-Type: application/json" -X POST -d '{"username": "Github Actions", "content": "hello"}' $DISCORD_WEBHOOK