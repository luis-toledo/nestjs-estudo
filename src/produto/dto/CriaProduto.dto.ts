import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsUrl,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
  nome: string;

  @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
  descricao: string;
}

export class ImagemProdutoDTO {
  @IsUrl(undefined, { message: 'URL para imagem inválida' })
  url: string;

  @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
  descricao: string;
}

export class ProdutoDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 })
  @IsPositive({
    message: 'O Valor precisa ser positivo e com no máximo 2 casas decimais.',
  })
  valor: number;

  @IsNumber()
  @Min(0, { message: 'A quantidade deve ser maior que zero. ' })
  quantidadeDisponivel: number;

  @IsNotEmpty()
  @MaxLength(1000, {
    message:
      'A descricao não pode estar vazia e deve ter menos de 1000 caracteres',
  })
  descricao: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3, {
    message:
      'Requisitos para a lista de caracteristicas não atendidos. Verifique a documentação.',
  })
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1, {
    message:
      'Requisitos para a lista de imagens não atendidos. Verifique a documentação.',
  })
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsNotEmpty({ message: 'A categoria não pode ser vazia' })
  categoria: string;

  @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
  dataCriacao: string;

  @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
  dataAtualizacao: string;
}
