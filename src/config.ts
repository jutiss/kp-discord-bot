import dotenv from 'dotenv';

dotenv.config();

interface ENV {
  kpApiKey?: string;
  discordToken?: string;
  discordClientId?: string;
  discordGuildId?: string;
  discordRoleId?: string;
}

type Config = Required<ENV>

const getConfig = (): ENV => {
  return {
    kpApiKey: process.env.KP_API_KEY,
    discordToken: process.env.DISCORD_TOKEN,
    discordClientId: process.env.DISCORD_CLIENT_ID,
    discordGuildId: process.env.DISCORD_GUILD_ID,
    discordRoleId: process.env.DISCORD_ROLE_ID,
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
