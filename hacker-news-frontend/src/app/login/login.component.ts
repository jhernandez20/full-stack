import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isCompleted: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    this.isCompleted = true;
    console.log('log');
    this.router.navigate(['/article']);
  }
  register() {
    console.log('log');
    this.openSnackBar('Hola', 'OK');
    this.router.navigate(['/register']);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
