import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './entities/type.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TypeService {
  
  private types:Type[] = []
 
  create(createTypeDto: CreateTypeDto) {
    const type:Type = {
      id:uuid(),
      name:createTypeDto.name,
      createdAt: new Date().getTime(),
    }

    this.types.push(type);

    return type;
  }

  findAll() {
    return this.types;
  }

  findOne(id: string) {
    const type = this.types.find(e => e.id === id);
    if(!type) throw new NotFoundException('Type not found');

    return type;
  }

  update(id: string, updateTypeDto: UpdateTypeDto) {
    let type = this.findOne(id);

    this.types = this.types.map(e => {
      if(e.id === id){
        type.updatedAt = new Date().getTime();
        type = {...type, ...updateTypeDto};
        return type;
      }
      return e;
    })

    return type;
  }

  remove(id: string) {
    this.types = this.types.filter(e => e.id === id)
    return;
  }

  fillWithSeedData(types:Type[]){
    this.types = types
  }
}
