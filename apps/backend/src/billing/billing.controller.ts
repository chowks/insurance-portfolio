import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Body,
  UseGuards,
} from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { AuthGuard } from '../../auth.guard';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get()
  async findAll(
    @Query('productCode') productCode: number,
    @Query('location') location: string
  ) {
    return this.billingService.findAll(productCode, location);
  }

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createBillingDto: CreateBillingDto) {
    return this.billingService.create(createBillingDto);
  }

  @Put()
  @UseGuards(AuthGuard)
  async update(
    @Query('productCode') productCode: number,
    @Body() updateBillingDto: UpdateBillingDto
  ) {
    return this.billingService.update(productCode, updateBillingDto);
  }

  @Delete()
  @UseGuards(AuthGuard)
  async delete(@Query('productCode') productCode: number) {
    return this.billingService.delete(productCode);
  }
}
