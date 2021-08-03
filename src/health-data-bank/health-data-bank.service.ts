import { Injectable } from '@nestjs/common';
import BloodPressure from '../entities/blood-pressure.entity';
import EstimatedGlomerularFiltrationRate from '../entities/estimated-glomerular-filtration-rate.entity';
import * as Csv from 'csvtojson';
import * as Path from 'path';

@Injectable()
export class HealthDataBankService {
  private bloodPressuresCsvPath = Path.join(__dirname, '../docs/blood-pressures.csv');
  private estimatedGlomerularFiltrationRatesCsvPath = Path.join(__dirname, '../docs/estimated-glomerular-filtration-rates.csv');
  
  /**
   * It read a CSV file and then map data to return an array of blood pressures
   * @returns an array of BloodPressure
   */
  async getBloodPressures(): Promise<BloodPressure[]> {
    const bloodPressures = await Csv().fromFile(this.bloodPressuresCsvPath);
    return BloodPressure.mapCsv(bloodPressures);
  }

  /**
   * It read a CSV file and then map data to return an array of estimated glomerular filtration rates
   * @returns an array of EstimatedGlomerularFiltrationRate
   */
  async getEstimatedGlomerularFiltrationRates(): Promise<EstimatedGlomerularFiltrationRate[]> {
    const estimatedGlomerularFiltrationRates = await Csv().fromFile(this.estimatedGlomerularFiltrationRatesCsvPath);
    return EstimatedGlomerularFiltrationRate.mapCsv(estimatedGlomerularFiltrationRates);
  }
}
