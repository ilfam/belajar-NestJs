import { Injectable } from '@nestjs/common';

import { KasirDto } from './dto/kasir.dto';

@Injectable()
export class AppService {
  items: any;
  getHello(): string {
    return 'Hello World!';
  }
  transaksi(data: KasirDto) {
    const { hargaSatuan, jumlahBarang, nama, jumlahPembayaran } = data;
    const totalBelanja = jumlahBarang * hargaSatuan;
    const kembalian = jumlahPembayaran - totalBelanja;
    return {
      meta: {
        statusCode: 200,
        message: 'succes',
      },
      data: {
        nama,
        jumlahBarang,
        hargaSatuan,
        jumlahPembayaran,
        total: totalBelanja,
        kembalian,
      },
    };
  }
}
