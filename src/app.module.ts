import { Module } from '@nestjs/common';
import { UsersController } from './users.contorller';

@Module({
 
  controllers: [UsersController]
  
})
export class AppModule {}
