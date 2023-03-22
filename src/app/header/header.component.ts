import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

 
  constructor(
    public carrinhoService: CarrinhoService,
    public route: Router
    ){ }
 
  moverParaPagina(pagina: string){
     this.route.navigate([pagina]);
  }

 
}
