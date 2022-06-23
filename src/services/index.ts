import { PrismaClient } from '@prisma/client';
import KinopoiskAPI from '../api/kinopoisk';
import config from '../config';

export const kinopoiskService = new KinopoiskAPI(config.kpApiKey);
export const prismaService = new PrismaClient();