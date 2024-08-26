import { Injectable } from '@nestjs/common';
import { CreateFsApiDto } from './dto/create-fs-api.dto';
import { UpdateFsApiDto } from './dto/update-fs-api.dto';
import { ConfigService } from '@nestjs/config';
import { FsApiInterfaceService } from '../fs-api-interface/fs-api-interface.service';
import { TFormJson } from 'src/types';
@Injectable()
export class FsApiService {
  constructor(
    private configService: ConfigService,
    private fsApiInterface: FsApiInterfaceService,
  ) {}
  create(createFsApiDto: CreateFsApiDto) {
    return 'This action adds a new fsApi';
  }

  findAll() {
    return `This action returns all fsApi`;
  }

  async getFormById(formId: number): Promise<TFormJson> {
    // const formJson = await this.fsApiInterface.formJsonGetByFormId(formId);
    return this.fsApiInterface.formJsonGetByFormId(formId);
  }

  findOne(id: number) {
    return `This action returns a #${id} fsApi`;
  }

  update(id: number, updateFsApiDto: UpdateFsApiDto) {
    return `This action updates a #${id} fsApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} fsApi`;
  }
}
