import { IsOptional, IsString, IsUUID } from 'class-validator';
export class UpdateClinicDto {

  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly name?:string;

  @IsString()
  @IsOptional()
  readonly address?:string;

  @IsString()
  @IsOptional()
  readonly type?:string;

}
