import { Test, TestingModule } from '@nestjs/testing';
import { FsApiInterfaceService } from './fs-api-interface.service';

describe('FsApiInterfaceService', () => {
  let service: FsApiInterfaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsApiInterfaceService],
    }).compile();

    service = module.get<FsApiInterfaceService>(FsApiInterfaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
