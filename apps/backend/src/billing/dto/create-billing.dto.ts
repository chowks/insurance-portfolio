import { IsNumber, IsString, IsDecimal } from 'class-validator';

export class CreateBillingDto {
  @IsNumber()
  productCode: number;

  @IsString()
  location: string;

  @IsDecimal()
  premiumPaid: number;
}
