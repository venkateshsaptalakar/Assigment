import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {


  constructor() { }
  authenticate(username: string,password:string)
  {
  //  console.log('before'+this.isUserLogged);
       if(username==='venkatesh' && password==='password')
       {
         sessionStorage.setItem('authenticateUser',username);
      //   console.log('after'+this.isUserLogged);
          return true
       }
       return false;
  }

  isUserLogged()
  {
    let user=sessionStorage.getItem('authenticateUser')
    return !(user===null);

  }
  

  logout()
  {
    sessionStorage.removeItem('authenticateUser'); 
  }

}
