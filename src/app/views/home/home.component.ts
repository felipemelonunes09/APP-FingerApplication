import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/components/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  nome: string = '';

  ngOnInit(): void {
     this.nome = this.clientService.getNome()
  }

}
