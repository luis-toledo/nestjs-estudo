import { Controller, Body, Post, Get } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoDTO } from './dto/CriaProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criaProdutos(@Body() produto: ProdutoDTO) {
    this.produtoRepository.salvar(produto);
  }

  @Get()
  async listaProdutos() {
    return this.produtoRepository.listar();
  }
}
