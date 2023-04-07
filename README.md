# RabotJS

RabotJS is a Discord bot based on the Discord.js library.

## Installation
Clone the repository with `git clone`, then go to the directory and run
`npm install`.

## Configuration
Make a `config.json` file in the root directory like so:
```json
{
    "token": "your-bot-token",
    "guildId": "your-guild-id",
    "clientId": "your-bot-client-id"
}
```
You can get your bot token and bot client ID from the [Discord Developer Portal](https://discord.com/developers/applications).

Then you can get your guild ID by enabling developer mode in Discord and right-clicking on your server icon.

## Usage
Start the bot with `node .`

(Re)deploy newly written commands with `node deploy-commands.js`
