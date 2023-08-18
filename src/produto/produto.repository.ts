import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private listaDeProdutos = [];

  async salvar(produto) {
    this.listaDeProdutos.push(produto);
  }

  async listar() {
    return this.listaDeProdutos;
  }
}
