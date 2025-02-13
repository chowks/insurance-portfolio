import { IsString, IsDecimal } from 'class-validator';

export class UpdateBillingDto {
  @IsString()
  location: string;

  @IsDecimal()
  premiumPaid: number;
}
