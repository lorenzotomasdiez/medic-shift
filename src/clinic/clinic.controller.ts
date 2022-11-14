import { Controller, Get, UsePipes, Post, Param, ParseUUIDPipe, Body, ValidationPipe} from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { CreateClinicDto } from './dto/create-clinic.dto';

@Controller('clinic')
@UsePipes(ValidationPipe)
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
    return createClinicDto;
  }

}
