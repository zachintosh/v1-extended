#!/bin/sh -l

sudo apt-get install curl
curl -H "Content-Type: application/json" -X POST -d '{"username": "test", "content": "hello"}' $DISCORD_WEBHOOK