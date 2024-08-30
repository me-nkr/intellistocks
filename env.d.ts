declare global {
    namespace NodeJS {
        interface ProcessEnv {
            UPSTOX_AUTH_CLIENT_ID: string;
            UPSTOX_AUTH_CLIENT_SECRET: string;
            UPSTOX_AUTH_REDIRECT_URL: string;

            UPSTASH_SESSION_REDIS_ENDPOINT: string;
            UPSTASH_SESSION_REDIS_SECRET: string;
            
            VERCEL_AUTH_CRON_SECRET: string;
        }
    }
}

export {}