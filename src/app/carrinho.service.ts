import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  items: IProdutoCarrinho[] = []

  constructor() { }

  obtemCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho') || '')
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.items.push(produto)
    localStorage.setItem('carrinho', JSON.stringify(this.items))
  }

  limparCarrinho() {
    this.items = []
    localStorage.clear()
  }
}
