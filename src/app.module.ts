import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config(); //=> Se cargan las variables de entorno del archivo .env

@Module({
  imports: [UsersModule, MongooseModule.forRoot(process.env.DB_URL)],
  controllers: [AppController, UsersController, UsersController],
  providers: [AppService, UsersService, UsersService],
})
export class AppModule {}
