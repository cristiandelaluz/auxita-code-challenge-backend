import { Test, TestingModule } from '@nestjs/testing';
import { HealthDataBankController } from './health-data-bank.controller';
import { HealthDataBankService } from './health-data-bank.service';

describe('HealthDataBankController', () => {
  let healthDataBankController: HealthDataBankController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthDataBankController],
      providers: [HealthDataBankService],
    }).compile();

    healthDataBankController = app.get<HealthDataBankController>(HealthDataBankController);
  });

  describe('get-blood-pressures', () => {
    it('should return an array', async () => {
      const data = await healthDataBankController.getBloodPressures();
      expect(Array.isArray(data)).toBe(true);
    });
  });

  describe('get-estimated-glomerular-filtration-rates', () => {
    it('should return an array', async () => {
      expect(Array.isArray(await healthDataBankController.getEstimatedGlomerularFiltrationRates())).toBe(true);
    });
  });
});
