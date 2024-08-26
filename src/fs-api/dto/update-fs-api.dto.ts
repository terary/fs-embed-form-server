import { PartialType } from '@nestjs/mapped-types';
import { CreateFsApiDto } from './create-fs-api.dto';

export class UpdateFsApiDto extends PartialType(CreateFsApiDto) {}
