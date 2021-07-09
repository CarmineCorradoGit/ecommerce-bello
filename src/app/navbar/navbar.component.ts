import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  role: 'user'|'admin'|null = null

  constructor(private appService: AppService) {
    this.role = this.appService.userRole
   }

  ngOnInit(): void {
  }

}
