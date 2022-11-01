import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {EventPattern, MessagePattern} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('get_users')
  accumulate(): any {
    //create user

    console.log('')
    return ''
  }

  @MessagePattern({ cmd: '' })
  jeanMichel(): any {
    return ''
  }
}
