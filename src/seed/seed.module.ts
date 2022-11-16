import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ClinicModule } from 'src/clinic/clinic.module';
import { TypeModule } from 'src/type/type.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[ClinicModule, TypeModule]
})
export class SeedModule {}
