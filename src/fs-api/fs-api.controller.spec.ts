import { Test, TestingModule } from '@nestjs/testing';
import { FsApiController } from './fs-api.controller';
import { FsApiService } from './fs-api.service';

describe('FsApiController', () => {
  let controller: FsApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FsApiController],
      providers: [FsApiService],
    }).compile();

    controller = module.get<FsApiController>(FsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
