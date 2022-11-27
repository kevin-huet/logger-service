import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { LogDTO } from '../app.dto';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(private logService: LogService) {}
  @EventPattern('LOG_CREATE')
  async createLog(log: LogDTO): Promise<any> {
    console.log(log);
    return this.logService.createLog(log);
  }

  @MessagePattern('LOGS_GET')
  async getLogs(filters: LogDTO): Promise<any> {
    return this.logService.getLogByFilters(filters);
  }
}
