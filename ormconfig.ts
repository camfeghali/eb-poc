import { ConnectionOptions } from 'typeorm';
require('dotenv').config({ path: './development.env' });

const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.MYSQL_USER || 'tenants-api',
  password: process.env.MYSQL_PASSWORD || 'dummypwd',
  database: process.env.MYSQL_DATABASE || 'tenants',
  synchronize: false,
  entities: [__dirname + '/**/**/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'], // where to read migrations from.
  cli: {
    migrationsDir: './migrations', // where to save created migrations to.
  },
};

export = config;
