import { Controller, Post, Get, Body } from '@nestjs/common';
import { KasirDto } from './dto/kasir.dto';
import { AppService } from './app.service';
import { HitungJarakDto } from './dto/hitungJarak.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('kasir')
  hitungTotal(@Body() data: KasirDto) {
    const response = this.appService.transaksi(data);
    return response;
  }
  @Post('hitungjarak')
  hitungJarak(@Body() data: HitungJarakDto) {
    const response = this.appService.hitungJarak(data);
    return response;
  }
}
