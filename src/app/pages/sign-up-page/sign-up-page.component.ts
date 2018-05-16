import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  password: String;
  email: String;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const user = {
        username: this.username,
        password: this.password,
        email: this.email
      };
      this.authService.signup(user)
      .then((result) => {
        this.router.navigate(['/trip']);
      })
      .catch((err) => {
            this.error = err.error.code;
            this.processing = false;
            this.feedbackEnabled = false;
          });
    }
  }

}
