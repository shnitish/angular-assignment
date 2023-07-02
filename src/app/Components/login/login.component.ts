import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('drawer') login!: MatDrawer;
  public loginForm!: FormGroup;

  constructor(
    private globalService: GlobalService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.globalService.toggleLoginSubject.subscribe(() => this.login.toggle());
    this.loginForm = this.formBuilder.group({
      mobileNumber: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }
}
