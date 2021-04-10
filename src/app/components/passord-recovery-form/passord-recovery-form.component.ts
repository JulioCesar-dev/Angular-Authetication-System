import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-passord-recovery-form',
  templateUrl: './passord-recovery-form.component.html',
  styleUrls: ['./passord-recovery-form.component.css'],
  providers: [MessageService]
})
export class PassordRecoveryFormComponent implements OnInit {
  email: string;

  constructor(
    private messageService: MessageService
  ) { 
    this.email = ""
  }

  ngOnInit(): void {
    
  }

  send() {
    console.log(1)
    this.messageService.add({severity:'info', summary:'', detail:'Uma nova senha foi encaminhada para o seu email'});
  }
}
