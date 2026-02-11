import { config } from 'dotenv';

config();


export const environment = {
    PORT: process.env.PORT || 3000,
    FINHUB_API_KEY: process.env.FINHUB_API_KEY || '',
}