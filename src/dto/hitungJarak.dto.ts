import { IsNumber, Min } from 'class-validator';

export class HitungJarakDto {
  @IsNumber()
  @Min(0)
  jarak: number;

  @IsNumber()
  @Min(0)
  kecepatan: number;

  @IsNumber()
  berangkatJam: number;

  @IsNumber()
  berangkatMenit: number;
}
