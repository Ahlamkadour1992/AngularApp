import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  usersArray = [{
    userName: "AhlamK",
    password: "ahlam2019"
  },
{
  userName: "AhdabS",
  password: "1234ahdab"
}]
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.loginForm = this.formBuilder.group({
      userName: "",
      password: ""
    });
   }
   onSubmit(values) {
     if(values){
    console.log("values:", values);
    for(var i=0; i<this.usersArray.length; i++){
      if(values.userName === this.usersArray[i].userName && values.password === this.usersArray[i].password){
        alert("Logged In");
        this.router.navigate(['/list']);
        return;
      } else if(values.userName !== this.usersArray[i].userName && values.password !== this.usersArray[i].password){
        alert("Enter valid username and password!");
        return;
      }
    }
    }
  }
  ngOnInit() {}
}
