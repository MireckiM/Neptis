import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  login() {

    this.http.post('https://jsonplaceholder.typicode.com/posts/', { email: this.fb, password: this.fb }).subscribe(responseData => { console.log(responseData) },
      (error) => { window.alert(error) },
      () => { window.alert("Zalogowano") }
    )
  }
}
