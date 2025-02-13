import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Billing } from './billing.entity';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';
import { FilterBillingDto } from './dto/filter-billing.dto';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(Billing)
    private billingRepository: Repository<Billing>
  ) {}

  async findAll(filter: FilterBillingDto): Promise<Billing[]> {
    const { productCode, location } = filter;
    const query = this.billingRepository.createQueryBuilder('billing');

    if (productCode) {
      query.andWhere('billing.productCode = :productCode', { productCode });
    }

    if (location) {
      query.andWhere('billing.location = :location', { location });
    }

    return query.getMany();
  }

  async create(createBillingDto: CreateBillingDto): Promise<Billing> {
    const billing = this.billingRepository.create(createBillingDto);
    return this.billingRepository.save(billing);
  }

  async update(
    productCode: number,
    updateBillingDto: UpdateBillingDto
  ): Promise<Billing> {
    const billing = await this.billingRepository.findOne({
      where: { productCode },
    });
    if (!billing) {
      throw new Error('Billing record not found');
    }
    Object.assign(billing, updateBillingDto);
    return this.billingRepository.save(billing);
  }

  async delete(productCode: number): Promise<void> {
    const result = await this.billingRepository.delete({ productCode });
    if (result.affected === 0) {
      throw new Error(
        `No billing records found for product code ${productCode}`
      );
    }
  }
}
