import { Injectable } from '@nestjs/common';
import jwt from "jsonwebtoken"

var jwt = require('jsonwebtoken');


@Injectable()
export class AppService {
  getHello(): string {
    return "ola"
  }
  
  
}
