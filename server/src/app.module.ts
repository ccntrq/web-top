import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events.gateway';
import { RandomSystemInfoService } from './random-system-info.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, EventsGateway, RandomSystemInfoService],
})
export class AppModule {}
