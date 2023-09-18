import { Controller, Post, Get, Body } from '@nestjs/common';
import { KasirDto } from './dto/kasir.dto';
import { AppService } from './app.service';

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
}
