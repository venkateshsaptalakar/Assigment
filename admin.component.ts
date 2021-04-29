import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username='venkatesh';
  password='';
  errorMessage='invalid Credential'
  invalidLogin=false;
  constructor(private router:Router,private hardcodedauthenticateservice:HardcodedauthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin()
  {
   // if(this.username==='venkatesh' && this.password==='password')
   if(this.hardcodedauthenticateservice.authenticate(this.username,this.password))
    {
      this.router.navigate(['complete'])
      this.invalidLogin=false;
    }
    else
    {
      this.invalidLogin=true;
    }
  }

}
