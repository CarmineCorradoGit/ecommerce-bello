import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[] = []

  constructor(private appService: AppService) {
    this.appService.getUsers().subscribe((res)=>{
      this.users = res;
      console.log(this.users)
    })
   }

  ngOnInit(): void {
  }

  checkUser(){
    
    this.appService.userRole 
  }

}
