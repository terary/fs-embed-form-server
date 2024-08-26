import { Injectable } from '@nestjs/common';
import { CreateFsApiInterfaceDto } from './dto/create-fs-api-interface.dto';
import { UpdateFsApiInterfaceDto } from './dto/update-fs-api-interface.dto';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { TFormJson } from 'src/types';

@Injectable()
export class FsApiInterfaceService {
  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}
  create(createFsApiInterfaceDto: CreateFsApiInterfaceDto) {
    return 'This action adds a new fsApiInterface';
  }

  async getGoogle(): Promise<any[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<any[]>('https://www.google.com').pipe(
        catchError((error: AxiosError) => {
          console.log({ errorData: error?.response?.data });
          const errorData = JSON.stringify(error?.response?.data || {});
          // this.logger.error(error.response.data);

          throw errorData;
        }),
      ),
    );
    return data;
  }

  async formJsonGetByFormId(formId: number): Promise<TFormJson> {
    const requestConfig = {
      headers: { Authorization: `Bearer cc17435f8800943cc1abd3063a8fe44f` },
    };

    const { data } = await firstValueFrom(
      this.httpService
        .get<TFormJson>(
          `https://www.formstack.com/api/v2/form/${formId}.json`,
          requestConfig,
        )
        .pipe(
          catchError((error: AxiosError) => {
            console.log({ errorData: error?.response?.data });
            const errorData = JSON.stringify(error?.response?.data || {});
            // this.logger.error(error.response.data);

            throw errorData;
          }),
        ),
    );
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} fsApiInterface`;
  }

  update(id: number, updateFsApiInterfaceDto: UpdateFsApiInterfaceDto) {
    return `This action updates a #${id} fsApiInterface`;
  }

  remove(id: number) {
    return `This action removes a #${id} fsApiInterface`;
  }
}
