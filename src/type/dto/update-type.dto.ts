// import { PartialType } from '@nestjs/mapped-types';
// import { CreateTypeDto } from './create-type.dto';

import { IsString, MinLength } from "class-validator";

// export class UpdateTypeDto extends PartialType(CreateTypeDto) {}
export class UpdateTypeDto {
  @IsString()
  @MinLength(1)
  name:string;

  

}