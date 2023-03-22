import { Injectable } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];
  

  constructor(
    
  ) { }
  

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]" );
    return this.itens;
  }

  adicionarCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => produtoId !== item.id);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    
  }

  
  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
