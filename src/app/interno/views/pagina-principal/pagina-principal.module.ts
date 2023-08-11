import { NgModule } from '@angular/core';
import { PaginaPrincipalComponent } from './containers/pagina-principal.component';
import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { NovoValorComponent } from './components/modals/novo-valor/novo-valor.component';
import { ModalGenericoComponent } from '../../../shared/components/modals/modal-generico/modal-generico.component';
import { SharedModule } from '../../../shared/shared.module';
import { CandidatoComponent } from './components/modals/candidato/candidato.component';
import { VotacaoAbertaComponent } from './components/votacao-aberta/votacao-aberta.component';
import { NovaVotacaoComponent } from './components/modals/nova-votacao/nova-votacao.component';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    VotacaoAbertaComponent,
    NovoValorComponent,
    ModalGenericoComponent,
    CandidatoComponent,
    NovaVotacaoComponent
  ],
  imports: [
    PaginaPrincipalRoutingModule,
    SharedModule
  ],
  entryComponents: [
    NovoValorComponent,
    ModalGenericoComponent,
    CandidatoComponent,
    NovaVotacaoComponent
  ],
  providers: [],
  bootstrap: []
})
export class PaginaPrincipalModule { }

