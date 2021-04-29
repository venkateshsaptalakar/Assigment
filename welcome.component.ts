import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
message="welcome to us"
 welcomeMessageFromService:any
  name:any;
  constructor(private route:ActivatedRoute,private service:WelcomeDataService) {

    
   }

  ngOnInit(): void {

  //  console.log(this.message);
   //console.log (this.route.snapshot.params['name'])
  }


  
  }

  

  
