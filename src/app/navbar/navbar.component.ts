import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  role: 'user'|'admin'|null = null

  constructor(private appService: AppService) {
    let temp = this.appService.userRoleChange.subscribe((value) => {
      this.role = this.appService.userRole;
    })
   }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges){
    console.log(change)
  }
}
