import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Billing } from './billing.entity';
import { CreateBillingDto } from './dto/create-billing.dto';
import { UpdateBillingDto } from './dto/update-billing.dto';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(Billing)
    private billingRepository: Repository<Billing>
  ) {}

  async findAll(productCode?: number, location?: string): Promise<Billing[]> {
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
    await this.billingRepository.update({ productCode }, updateBillingDto);
    const billing = await this.billingRepository.findOne({ where: { productCode } });
    if (!billing) {
      throw new Error('Billing not found');
    }
    return billing;
  }

  async delete(productCode: number): Promise<void> {
    await this.billingRepository.delete({ productCode });
  }
}
