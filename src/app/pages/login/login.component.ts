import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
fname:any;
lname:any;
num:any;
email:any;
pass1:any;
pass2:any;
errors:string[]=[];
hide:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|co|net\.in|in)$/;
    let pass=/^([A-Z]|[a-z]|[!|@|#|%|&|*]|[0-9])$/;
    if(this.fname==undefined || this.fname.length<3)
      this.errors.push("First Name  should be greater than 3 charecters")
    if(this.lname==undefined || this.lname.length<3)
      this.errors.push("Last Name  should be greater than 3 charecters")
    if(this.email==undefined || !expr.test(this.email))
      this.errors.push("Should be in email format")
    if(this.pass1==undefined || this.pass1.length<8)
      this.errors.push("password length should be greater than 8 charecters")
    if(this.pass2==undefined || this.pass1!=this.pass2)
      this.errors.push("Password should be same")
    }


}
