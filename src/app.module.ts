import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Connection } from 'typeorm';
import ORMConfig = require('../ormconfig');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ORMConfig,
      entities: [User],
      keepConnectionAlive: true,
    }),
    ConfigModule.forRoot({
      envFilePath: 'development.env',
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
