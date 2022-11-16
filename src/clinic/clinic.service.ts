import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {Clinic} from './interfaces/clinic.interface'
import { v4 as uuid} from 'uuid'; 
import { CreateClinicDto, UpdateClinicDto } from './dto';

@Injectable()
export class ClinicService {
  private clinics:Clinic[] = [];
  
  findAll(){
    return this.clinics;
  }

  findOneById(id:string){
    const clinic = this.clinics.find(e => e.id === id);

    if(!clinic){
      throw new NotFoundException('Not Found Clinic with id: ' + id);
    }

    return clinic;
  }

  create(createClinicDto: CreateClinicDto){
    const newClinic = {...createClinicDto, id:uuid()}
    this.clinics.push(newClinic);

    return newClinic
  }

  update(id:string, updateClinicDto: UpdateClinicDto){
    let clinic = this.findOneById(id);
    if(updateClinicDto.id && updateClinicDto.id !== id){
      throw new BadRequestException('Clinic id is not valid inside body');
    }
    clinic = {...clinic, ...updateClinicDto, id}
    this.clinics = this.clinics.map(e => e.id === id ? clinic : e);

    return clinic;
  }

  delete(id:string){
    let clinic = this.findOneById(id);
    if(!clinic) throw new BadRequestException('Clinic id is not valid');

    this.clinics = this.clinics.filter(e => e.id !== id);
    return this.clinics;
  }

  fillWithSeedData(clinics:Clinic[]){
    this.clinics = clinics
  }
}
