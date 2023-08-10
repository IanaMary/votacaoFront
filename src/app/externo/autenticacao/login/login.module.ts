import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CadastroUserComponent } from './containers/cadastro-user/cadastro-user.component';


@NgModule({
  declarations: [
    LoginComponent,
    CadastroUserComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
