import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HousesController } from './houses/houses.controller';
import { MessagesModule } from './messages/messages.module';
import * as dotenv from 'dotenv';

dotenv.config(); //=> Se cargan las variables de entorno del archivo .env

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(process.env.DB_URL),
    MessagesModule,
  ],
  controllers: [
    AppController,
    HousesController,
  ],
  providers: [AppService],
})
export class AppModule {}
