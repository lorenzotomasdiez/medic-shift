import { Module } from '@nestjs/common';
import { ClinicModule } from './clinic/clinic.module';

@Module({
  imports: [ClinicModule],
  controllers: [],
  providers: [],
  exports:[],
})

export class AppModule {}
