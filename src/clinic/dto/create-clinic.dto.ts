import { IsString } from 'class-validator';
export class CreateClinicDto {
  @IsString()
  readonly name:string;

  @IsString()
  readonly address:string;

  @IsString()
  readonly type:string;
}
