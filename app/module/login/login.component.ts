import { Component } from '@angular/core';
import { __values } from 'tslib';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  routerpage : any='/register'

constructor(private route: Router){}

  login(one: any){
    var name ="john@gmail.com"
    var pass ="7172"
     console.log(one.value)
     if(one.value.username&& one.value.password&&one.value.username==name&&one.value.password==pass){
      this.route.navigate(['/dashboard'])
     }
     else{
      alert("Username or Password Invalid !")
     }
  }
}
