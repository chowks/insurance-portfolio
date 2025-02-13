import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBillingDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  photo: string;

  @IsNotEmpty()
  @IsNumber()
  productCode: number;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsNumber()
  premiumPaid: number;
}
