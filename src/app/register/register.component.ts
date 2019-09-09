import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: "",
      lastName: "",
      userName: "",
      password: ""
    });
  }
  onSubmit(values) {
    console.log("values:", values);
  }

  ngOnInit() {}
  getValue() {
    console.log("get values from register form");
  }
}
