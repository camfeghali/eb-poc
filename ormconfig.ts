import { ConnectionOptions } from 'typeorm';
require('dotenv').config({ path: './development.env' });

const host = process.env.RDS_HOSTNAME || process.env.DB_HOST || 'localhost';
const port =
  parseInt(process.env.RDS_PORT, 10) ||
  parseInt(process.env.DB_PORT, 10) ||
  3306;
const database = process.env.MYSQL_DATABASE || 'ebdb';
const username =
  process.env.RDS_USERNAME || process.env.MYSQL_USER || 'tenants-api';
const password =
  process.env.RDS_PASSWORD || process.env.MYSQL_PASSWORD || 'dummypwd';

const config: ConnectionOptions = {
  type: 'mysql',
  host,
  port,
  username,
  password,
  database,
  synchronize: false,
  entities: [__dirname + '/**/**/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'], // where to read migrations from.
  cli: {
    migrationsDir: './migrations', // where to save created migrations to.
  },
};

export = config;
