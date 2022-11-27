import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { LogDTO } from '../app.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LogService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  public async getLogByFilters(filters: LogDTO) {
    const { service, type, ...search } = filters;
    return await this.prisma.log.findMany();
  }

  public async createLog(log: LogDTO) {
    const { id, ...rest } = log;
    try {
      await this.prisma.log.create({ data: rest });
      await this.sendErrorOnDiscord(log);
    } catch (e) {
      console.log(e.message);
    }
  }

  public async sendErrorOnDiscord(log: LogDTO) {
    const discordWebhookUrl = this.configService.get('DISCORD_WEBHOOK_URL');
    if (discordWebhookUrl && log.type === 'ERROR') {
      console.log('error test');
      return await this.httpService
        .post(discordWebhookUrl, {
          content:
            '```' +
            `[${log.service}] - ${log.name}: ${log.description}` +
            '```',
        })
        .toPromise();
    }
  }
}
