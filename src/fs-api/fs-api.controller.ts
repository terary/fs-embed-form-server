import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FsApiService } from './fs-api.service';
import { CreateFsApiDto } from './dto/create-fs-api.dto';
import { UpdateFsApiDto } from './dto/update-fs-api.dto';
import * as srcTemplates from './source-templates';

@Controller('fs-api')
export class FsApiController {
  constructor(private readonly fsApiService: FsApiService) {}

  @Post()
  create(@Body() createFsApiDto: CreateFsApiDto) {
    return this.fsApiService.create(createFsApiDto);
  }

  @Get()
  findAll() {
    return this.fsApiService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.fsApiService.findOne(+id);
  // }

  @Get('/form-get/:formId')
  getFormById(@Param('formId') formId: string) {
    return this.fsApiService.getFormById(+formId);
  }

  @Get('/test-v4-html/:formId')
  async getEmbedFormFromApiHtml(@Param('formId') formId: string) {
    const formJson = await this.fsApiService.getFormById(+formId);

    return srcTemplates.iframeSource({
      formJsonHtml: formJson.html,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFsApiDto: UpdateFsApiDto) {
    return this.fsApiService.update(+id, updateFsApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fsApiService.remove(+id);
  }
}
