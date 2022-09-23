import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  mustMatch(password: any, password2: any) {

    return (formGroup: FormGroup) => {

      const passwordcontrol = formGroup.controls[password];
      const password2control = formGroup.controls[password2];

      if (password2control.errors && !password2control.errors['mustMatch']) {
        return;
      }
      if (passwordcontrol.value !== password2control.value) {
        password2control.setErrors({ mustMatch: true })
      } else {
        password2control.setErrors(null)
      }
    };
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9@!_]{6,}")]],
      password2: ['', [Validators.required]],
    },{
      validators:this.mustMatch('password','password2')
    })
  }


  register() {

    this.http.post('https://jsonplaceholder.typicode.com/posts/', this.registerForm).subscribe(responseData => { console.log(responseData) },
      (error) => { window.alert(error) },
      () => { window.alert("Zalogowano") }
    )
  }

}

