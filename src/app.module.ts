import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthDataBankModule } from './health-data-bank/health-data-bank.module';

@Module({
  imports: [HealthDataBankModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
