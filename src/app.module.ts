import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryController } from './api/history.controller';

@Module({
  imports: [],
  controllers: [AppController, HistoryController],
  providers: [AppService],
})
export class AppModule {}
