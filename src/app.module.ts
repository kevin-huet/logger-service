import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LogModule } from './log/log.module';

@Module({
  imports: [ConfigModule.forRoot(), LogModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
