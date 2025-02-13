import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillingService } from './billing.service';
import { Billing } from './billing.entity';

describe('BillingService', () => {
  let service: BillingService;
  let repository: Repository<Billing>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BillingService,
        {
          provide: getRepositoryToken(Billing),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<BillingService>(BillingService);
    repository = module.get<Repository<Billing>>(getRepositoryToken(Billing));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
