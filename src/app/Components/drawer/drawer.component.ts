import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  public loginForm!: FormGroup;

  constructor(
    private globalService: GlobalService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.globalService.toggleDrawerSubject.subscribe(() =>
      this.drawer.toggle()
    );
    this.loginForm = this.formBuilder.group({
      mobileNumber: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }
}
