import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  private nome: string ='';


  setNome(nome:string): void {
    this.nome = nome;
  }

  getNome(): string{
    return this.nome;
  }

}
