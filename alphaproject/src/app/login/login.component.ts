import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userId: string = "marco";
  password: string ="marco";
  authenticated: boolean = true; 
  errorMsg: string = "Wrong user or psw"

  constructor(private route: Router) {}

  ngOnInit(): void {
    
  }

  gestAuth = () : void => {
    if(this.userId =="marco" && this.password == "123"){
      this.route.navigate(['welcome', this.userId])
      this.authenticated = true;
    }else{
      this.authenticated = false; 
    }
  }
}
