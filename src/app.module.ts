import { Module } from '@nestjs/common';
import { UsersController } from './users.contorller';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports:[MongooseModule.forRoot(" mongodb://127.0.0.1:27017/task-one")],
  controllers: [UsersController]
  
})
export class AppModule {}
