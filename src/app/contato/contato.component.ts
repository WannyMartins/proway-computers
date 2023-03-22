import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
 
  constructor(
    private fb: FormBuilder
  ){ }

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required,
    ]],

    assunto:["", [
      Validators.minLength(10),
      Validators.required,
    ]],

    telefone: ["", [
      Validators.minLength(11),
      Validators.required,
    ]],

    email: ["", [
      Validators.email,
      Validators.required,
    ]],
    
    menssagem: ["", [
      Validators.minLength(20),
      Validators.required,
    ]]
  })

  enviarFormulario(){
    alert("Fomulário de contato enviado com sucesso!");
    this.formContato.reset();
  }

}
