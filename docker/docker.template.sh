#!/bin/bash

docker stop raidar-calc || :
docker rm raidar-calc || :

docker run --name raidar-calc \
--env TZ="Europe/Berlin" \
-v %your_config_location%/config.js:/app/src/config.js \
-v %your_config_location%/config.deploy.js:/app/src/config.deploy.js \
-v /etc/localtime:/etc/localtime:ro \
--restart=unless-stopped \
-d raraesh/raidar-calc:alpine-latest