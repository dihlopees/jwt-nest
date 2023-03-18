import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
const jwt = require("jsonwebtoken");


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/teste")
  getJwt(){
    
    var token = jwt.sign('viptech', "4Fee5", {expiresIn: "3h"});
    return console.log(token)
    }
   

  
}
