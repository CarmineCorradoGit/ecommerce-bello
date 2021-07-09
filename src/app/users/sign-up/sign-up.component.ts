import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  signUp(){
    let obj: User
    this.appService.postUser(obj).subscribe((res)=>{
      this.appService.userRole = 'user';
    })
  }

}
