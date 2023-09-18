import { IsString, IsNumber, Min } from 'class-validator';

export class KasirDto {
  @IsString()
  nama: string;

  @IsNumber()
  @Min(0)
  hargaSatuan: number;

  @IsNumber()
  @Min(1)
  jumlahBarang: number;

  @IsNumber()
  @Min(0)
  jumlahPembayaran: number;
}
