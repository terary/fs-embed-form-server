import { Test, TestingModule } from '@nestjs/testing';
import { FsApiService } from './fs-api.service';

describe('FsApiService', () => {
  let service: FsApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsApiService],
    }).compile();

    service = module.get<FsApiService>(FsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
