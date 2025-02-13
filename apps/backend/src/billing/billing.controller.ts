import {
  Controller,
  Get,
  Post,
  Put,
  Query,
  Body,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { FilterBillingDto } from './dto/filter-billing.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/role.decorator';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get()
  async findAll(@Query() filter: FilterBillingDto) {
    return this.billingService.findAll(filter);
  }

  @Post()
  @UseGuards(RolesGuard)
  @Roles('admin')
  async create(@Body() createBillingDto: CreateBillingDto) {
    return this.billingService.create(createBillingDto);
  }

  @Put()
  @UseGuards(RolesGuard)
  @Roles('admin')
  async update(
    @Query('productCode') productCode: number,
    @Body() updateBillingDto: UpdateBillingDto
  ) {
    return this.billingService.update(productCode, updateBillingDto);
  }

  @Delete()
  @UseGuards(RolesGuard)
  @Roles('admin')
  async delete(@Query('productCode') productCode: number): Promise<void> {
    return this.billingService.delete(productCode);
  }
}
