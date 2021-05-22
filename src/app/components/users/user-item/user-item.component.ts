import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  users: User[] = []; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.read().subscribe(users =>  {
      this.users = users
    })
  }

}
