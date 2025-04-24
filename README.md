# Discord Bot Setup Guide

Follow these steps to set up and run the Discord bot:

## Prerequisites
1. Install [Node.js](https://nodejs.org/) (LTS version recommended).
2. Install [Git](https://git-scm.com/).
3. Create a bot on the [Discord Developer Portal](https://discord.com/developers/applications) and get your bot token.

## Installation
1. Clone this repository

2. Install dependencies:
    ```bash
    npm install
    ```

## Configuration
1. Create a `.env` file in the root directory and add the following:
    ```
    DISCORD_TOKEN=your-bot-token
    DISCORD_CLIENT_ID=your-bot-client-id
    ```

    Replace `your-bot-token` with the token from the Discord Developer Portal.

## Running the Bot
1. Start the bot:
    ```bash
    npm build && npm start
    ```

2. Invite the bot to your server using the OAuth2 URL from the Discord Developer Portal.

## Features
- List the main features of your bot here.

## Troubleshooting
- If you encounter issues, check the logs or ensure your `.env` file is correctly configured.

## License
This project is licensed under the [MIT License](LICENSE).