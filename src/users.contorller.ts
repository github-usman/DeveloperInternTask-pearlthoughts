import { Controller, Get } from "@nestjs/common";

@Controller("/users")
export class UsersController{
    @Get("/profile")
    getProfle(){
        return "Hello Usman this is your Profile! yes";
    }
}