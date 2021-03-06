import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../shared/auth.service';
import {AuthenticationResult} from '../../entities/AuthenticationResult';
import {Router} from '@angular/router';
import {UserInfoService} from '../../../shared/user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private router: Router,
    private userInfoService: UserInfoService,
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    this.httpClient.post<AuthenticationResult>('http://localhost:8080/login', this.loginForm.getRawValue()).subscribe(
      authenticationResult => {
        this.authService.saveAuthentication(
          authenticationResult
        );
        this.userInfoService.getUserInfo().subscribe(
          userInfo => sessionStorage.setItem('yugioh.user.info', JSON.stringify(userInfo))
        );
        this.router.navigateByUrl('/').then();
      }
    );
  }

  goToRegister() {
    this.router.navigateByUrl('/users/create').then();
  }
}
