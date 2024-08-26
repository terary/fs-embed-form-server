import { Module } from '@nestjs/common';
import { FsApiService } from './fs-api.service';
import { FsApiController } from './fs-api.controller';
import { ConfigModule } from '@nestjs/config';
import { FsApiInterfaceModule } from '../fs-api-interface/fs-api-interface.module';
@Module({
  imports: [ConfigModule, FsApiInterfaceModule],
  controllers: [FsApiController],
  providers: [FsApiService],
})
export class FsApiModule {}
