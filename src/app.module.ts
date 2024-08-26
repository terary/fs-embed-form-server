import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FsApiModule } from './fs-api/fs-api.module';
import { ConfigModule } from '@nestjs/config';
import { FsApiInterfaceModule } from './fs-api-interface/fs-api-interface.module';

@Module({
  imports: [
    FsApiModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    FsApiInterfaceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
