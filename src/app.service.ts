import { Injectable } from '@nestjs/common';

import { KasirDto } from './dto/kasir.dto';
import { HitungJarakDto } from './dto/hitungJarak.dto';

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
  hitungJarak(data: HitungJarakDto) {
    const { jarak, kecepatan, berangkatMenit, berangkatJam } = data;
    const TOTALMENITDALAMJAM = 60;
    const durasiJam = jarak / kecepatan;
    const durasiMenit = Math.round(durasiJam * TOTALMENITDALAMJAM);
    const kandidatSampaiMenit = berangkatMenit + durasiMenit;
    const sampaiMenit = kandidatSampaiMenit % TOTALMENITDALAMJAM;
    const tambahanJam = Math.floor(kandidatSampaiMenit / TOTALMENITDALAMJAM);
    const sampaiJam = berangkatJam + tambahanJam;
    return {
      meta: {
        statusCode: 200,
        message: 'succes',
      },
      data: {
        sampaiJam,
        sampaiMenit,
      },
    };
  }
}
