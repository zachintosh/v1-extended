#!/bin/sh -l

sudo apt install curl
curl -H "Content-Type: application/json" -X POST -d '{"username": "test", "content": "hello"}' $DISCORD_WEBHOOK