import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/components/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  getName(nome: string): void{
     this.clientService.setNome(nome)
  }
}
