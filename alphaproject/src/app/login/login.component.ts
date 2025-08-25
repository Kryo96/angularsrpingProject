import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    
  }

  gestAuth = () : void => {
    console.log(this.userId)

    if(this.userId =="marco" && this.password == "123"){
      this.authenticated = true;
    }else{
      this.authenticated = false; 
    }
  }
}
