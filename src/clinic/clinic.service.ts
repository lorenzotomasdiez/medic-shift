import { Injectable, NotFoundException } from '@nestjs/common';
import {Clinic} from './interfaces/clinic.interface'
import { v4 as uuid} from 'uuid'; 

@Injectable()
export class ClinicService {
  private clinics:Clinic[] = [
    {
      id:uuid(),
      name:'UPA',
      address:'Antartida 2230'
    },
    {
      id:uuid(),
      name:'Hospital',
      address:'Felix Pagola 1530'
    },
    {
      id:uuid(),
      name:'Covepam',
      address:'Espana 2230'
    },
  ];
  
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

}
