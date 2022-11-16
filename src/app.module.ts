import { Module } from '@nestjs/common';
import { ClinicModule } from './clinic/clinic.module';
import { TypeModule } from './type/type.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [ClinicModule, TypeModule, SeedModule],
  controllers: [],
  providers: [],
  exports:[],
})

export class AppModule {}
