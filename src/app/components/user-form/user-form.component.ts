import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import {MessageService} from 'primeng/api';

import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [MessageService]
})
export class UserFormComponent implements OnInit {
  user: User;
  passwordRepeat: string;

  constructor(
      private storage: LocalStorageService,
      private messageService: MessageService,
      private router: Router
    ) { 
    this.user = new User();
    this.passwordRepeat = '';
  }

  ngOnInit(): void {}

  save() {
    if (this.user.password != this.passwordRepeat) {
      this.messageService.add({severity:'error', summary:'Erro', detail:'Senhas não são iguais'});
      return;
    }

    this.storage.set(this.user.email, this.user);    

    this.messageService.add({severity:'success', summary:'Usuário', detail:'Cadastro realizado com sucesso!'});
    
    this.router.navigate(['/login']);
  }
}
