import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import BloodPressure from '../entities/blood-pressure.entity';
import EstimatedGlomerularFiltrationRate from '../entities/estimated-glomerular-filtration-rate.entity';
import { HealthDataBankService } from './health-data-bank.service';

@ApiTags('Health data bank')
@Controller('health-data-bank')
export class HealthDataBankController {
  constructor(private readonly healthDataBankService: HealthDataBankService) {}

  @Get('get-blood-pressures')
  getBloodPressures(): Promise<BloodPressure[]> {
    return this.healthDataBankService.getBloodPressures();
  }

  @Get('get-estimated-glomerular-filtration-rates')
  getEstimatedGlomerularFiltrationRates(): Promise<EstimatedGlomerularFiltrationRate[]> {
    return this.healthDataBankService.getEstimatedGlomerularFiltrationRates();
  }
}
