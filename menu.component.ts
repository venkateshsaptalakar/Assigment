import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 isUserLoggedIn:boolean=false;
  constructor(private hardcodedAuthenticationService:HardcodedauthenticationService) { }
  

  ngOnInit(): void {
  this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLogged();
  }

}
