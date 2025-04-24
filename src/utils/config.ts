import dotenv from 'dotenv';

dotenv.config();

const { DISCORD_TOKEN, DISCORD_CLIENT_ID } = process.env;

if (!DISCORD_TOKEN) {
  throw new Error('DISCORD_TOKEN is not defined in .env file');
}
if (!DISCORD_CLIENT_ID) {
  throw new Error('DISCORD_CLIENT_ID is not defined in .env file');
}

export const config = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID
}