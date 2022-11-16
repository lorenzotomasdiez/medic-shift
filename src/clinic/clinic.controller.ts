import { Controller, Get, Post, Param, ParseUUIDPipe, Body, Patch, Delete} from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';

@Controller('clinic')
export class ClinicController {
  constructor (
    private readonly clinicService:ClinicService
  ){}

  @Get()
  getAll(){
    return this.clinicService.findAll();
  }

  @Get('/:id')
  getById(@Param('id', ParseUUIDPipe) id:string){
    return this.clinicService.findOneById(id);
  }

  @Post()
  createClinic(@Body() createClinicDto: CreateClinicDto){
    return this.clinicService.create(createClinicDto);
  }

  @Patch(':id')
  updateClinic(
    @Param('id', ParseUUIDPipe) id:string,
    @Body() updateClinicDto: UpdateClinicDto)
  {
    return this.clinicService.update(id, updateClinicDto);
  }

  @Delete(':id')
  deleteClinic(
   @Param('id', ParseUUIDPipe) id:string
  )
  {
    return this.clinicService.delete(id);
  }

}
