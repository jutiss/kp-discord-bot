import { Collection } from 'discord.js';

declare namespace NodeJS {
  interface ProcessEnv {
    KP_API_KEY: string;
    DISCORD_TOKEN: string;
    DISCORD_CLIENT_ID: string;
    DISCORD_GUILD_ID: string;
    DISCORD_ROLE_ID: string;
  }
}

declare module 'discord.js' {
  export interface Client {
    commands: Collection<unknown, any>;
  }
}
