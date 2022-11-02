import { Injectable } from '@nestjs/common';
import { LogDTO } from './app.dto';
import { PrismaService } from './prisma.service';
import { LogType } from 'prisma';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getLogByFilters(filters: LogDTO) {
    const { service, type, ...search } = filters;
    return this.prisma.log.findMany();
  }

  async createLog(log: LogDTO) {
    const { id, ...rest } = log;
    await this.prisma.log.create({ data: rest });
  }
}
