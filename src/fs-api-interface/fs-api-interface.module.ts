import { Module } from '@nestjs/common';
import { FsApiInterfaceService } from './fs-api-interface.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule],
  // controllers: [FsApiInterfaceController],
  providers: [FsApiInterfaceService],
  exports: [FsApiInterfaceService],
})
export class FsApiInterfaceModule {}
