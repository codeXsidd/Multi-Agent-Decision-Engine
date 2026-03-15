import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const envSchema = z.object({
    PORT: z.string().default('3000').transform(Number),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    JWT_SECRET: z.string().min(32).default('default_jwt_secret_for_development_replace_me'),
});

const envVars = envSchema.safeParse(process.env);

if (!envVars.success) {
    console.error('Invalid environment variables:', JSON.stringify(envVars.error.format(), null, 2));
    process.exit(1);
}

export const config = {
    port: envVars.data.PORT,
    nodeEnv: envVars.data.NODE_ENV,
    jwt: {
        secret: envVars.data.JWT_SECRET,
    },
};
