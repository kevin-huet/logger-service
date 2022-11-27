import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { LogDTO } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
