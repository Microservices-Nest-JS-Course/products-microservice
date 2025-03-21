import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @Min(0)
  @IsNotEmpty()
  price: number;
}
