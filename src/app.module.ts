import { Module } from '@nestjs/common';
import { UsersController } from './users.contorller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
 
  imports:[
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(ConfigService:ConfigService)=>{
          const port = ConfigService.get("DATABASE_PORT");
          const ip = ConfigService.get("DATABASE_IP");
          const db = ConfigService.get("DATABASE_NAME");
          const uri = `mongodb://${ip}:${port}/${db}`
          return {
            uri,
          };
      },
      inject:[ConfigService],
    }),
  
  ],


  controllers:[UsersController
  ],
})
export class AppModule {}
