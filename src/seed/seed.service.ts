import { Injectable } from '@nestjs/common';
import { ClinicService } from 'src/clinic/clinic.service';
import { TypeService } from 'src/type/type.service';
import { CLINIC_SEED } from './data/clinic.seed';
import { TYPE_SEED } from './data/type.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly clinicService:ClinicService,
    private readonly typeService:TypeService
    ){}

  runSeed() {
    this.clinicService.fillWithSeedData(CLINIC_SEED);
    this.typeService.fillWithSeedData(TYPE_SEED);
    return 'Seeded';
  }
}
