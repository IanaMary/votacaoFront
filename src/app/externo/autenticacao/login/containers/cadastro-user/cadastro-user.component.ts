import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../../../../services/auth/auth.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.scss']
})
export class CadastroUserComponent  {


  loginForm: FormGroup;
  hide = true;
  email: any;
  senha: any;

  constructor(private readonly loginService: LoginService,
            private readonly formBuilder: FormBuilder,
              private readonly router: Router,
              private readonly auth: AuthService,) {

    this.loginForm = this.formBuilder.group({
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      senha: [null, [
        Validators.required,
        Validators.minLength(6)
      ]]
    });

  }

  ngOnInit() { }

  criarUsuario() {
    this.loginService.novoUsuario(this.email, this.senha)
      .subscribe((user: any) => {
        this.router.navigate(['/autenticacao/login']);
      }, (error: any) => {
        let messageErr;
        if (error.status === 401) {
          messageErr = 'Usuário e/ou senha incorretos.';
        } else {
          messageErr = 'Algo de errado aconteceu, tente novamente mais tarde.';
        }
      });
  }

  cancelar() {
    this.router.navigate(['/autenticacao/login']);
  }

}
