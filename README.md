# SOS-troop-calculator

## Installation

### Discord
1. Open your Discord-API Page
2. Add a new Application
3. Configure Application as Bot
4. Enable App-Authorization
https://discordjs.guide/#before-you-begin

### Docker

1. create a file named ``config.json``

```js
export let discord = {
  token: 'YOUR_TOKEN',
  }
  
export let bot = {
  prefix: 'calc',
  activity: {
    name: 'waiting for calculating',
    type: 'PLAYING'
  }
}
```

3. create a file named ``config.deploy.js``
```js
export const discord = {
  token: 'your_token',
  client_id: 'your_client_id',
  guilds: [
    {
      id: 'your_guild_id',
      name: 'your_guild_name'
    },
    {
      id: 'your_guild_id2',
      name: 'your_guild_name2'
    }
  ]
}
```

4. create a file named ``docker.sh``

```bash
#!/bin/bash

docker stop raidar-calc || :
docker rm raidar-calc || :

docker run --name raidar-calc \
-v %YOUR_PATH_TO_CONFIG/config.js:/app/srv/config.js \
-v %YOUR_PATH_TO_CONFIG/config.deploy.js:/app/src/config.deploy.js \
-v /etc/localtime:/etc/localtime:ro \
--restart=unless-stopped \
-d raraesh/raidar-calc:alpine-latest
```

## Guild Create and Guild Delete
The bot is now configured to respond to GuildCreate and GuildDelete events and update the config.deploy.js file. This ensures that even after restarting the container, command-deploys are possible on all Discord servers on which the bot is invited.