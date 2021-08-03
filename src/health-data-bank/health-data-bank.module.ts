import { Module } from '@nestjs/common';
import { HealthDataBankController } from './health-data-bank.controller';
import { HealthDataBankService } from './health-data-bank.service';

@Module({
  controllers: [HealthDataBankController],
  providers: [HealthDataBankService],
})
export class HealthDataBankModule {}