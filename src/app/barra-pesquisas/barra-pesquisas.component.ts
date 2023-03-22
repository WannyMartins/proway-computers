import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisas',
  templateUrl: './barra-pesquisas.component.html',
  styleUrls: ['./barra-pesquisas.component.css']
})
export class BarraPesquisasComponent {

  constructor(
    private router: Router
  ) { }

  descricao = "";
  pesquisar(){
    if(this.descricao){
      this.router.navigate(['produtos'], {queryParams: {descricao: this.descricao }});
    }
    this.router.navigate(['produtos']);
  }
}
