import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MessageService} from 'primeng/api';

import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [MessageService]
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private localStorageService: LocalStorageService
  ) { 
    this.email = "";
    this.password = "";
  }

  ngOnInit(): void {}

  goToUserForm() {
    this.router.navigate(['/user']);
  }

  login() {
    const user = this.localStorageService.get(this.email);

    console.log(user.password)
    console.log(this.password)

    if(user.password == this.password) {
      this.messageService.add({severity:'success', summary:'Login', detail:'Login executado com sucesso'});
    } else {
      this.messageService.add({severity:'error', summary:'Login', detail:'Credenciais inválidas'});
    }
  }
}
