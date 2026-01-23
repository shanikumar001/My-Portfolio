import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    schema: './src/schema.js',
    out: './drizzle',
    dialect: 'mysql',
    dbCredentials: {
        host: 'localhost',
        user: 'root',
        password: 'root32145',
        database: 'portfolio_database',
    }
})