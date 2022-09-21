import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {
    this.email="",
    this.password=""
  }

  email: string;
  password: string;

  ngOnInit(): void {}
}
