import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateBillingDto {
  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsNumber()
  premiumPaid: number;
}
