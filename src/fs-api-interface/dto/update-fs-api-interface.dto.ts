import { PartialType } from '@nestjs/mapped-types';
import { CreateFsApiInterfaceDto } from './create-fs-api-interface.dto';

export class UpdateFsApiInterfaceDto extends PartialType(CreateFsApiInterfaceDto) {}
