#!/bin/sh -l

apt install curl
curl -H "Content-Type: application/json" -X POST -d '{"username": "test", "content": "hello"}' $DISCORD_WEBHOOK