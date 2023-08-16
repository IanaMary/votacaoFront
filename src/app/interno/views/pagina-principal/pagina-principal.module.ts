import { NgModule } from '@angular/core';
import { PaginaPrincipalComponent } from './containers/pagina-principal.component';
import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { ModalGenericoComponent } from '../../../shared/components/modals/modal-generico/modal-generico.component';
import { SharedModule } from '../../../shared/shared.module';
import { CandidatoComponent } from './components/modals/candidato/candidato.component';
import { NovaVotacaoComponent } from './components/modals/nova-votacao/nova-votacao.component';
import { VotacaoListaComponent } from './components/votacao-lista/votacao-lista.component';
import { NovoCandidatoComponent } from './components/modals/novo-candidato/novo-candidato.component';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    VotacaoListaComponent,
    ModalGenericoComponent,
    CandidatoComponent,
    NovaVotacaoComponent,
    NovoCandidatoComponent
  ],
  imports: [
    PaginaPrincipalRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ModalGenericoComponent,
    CandidatoComponent,
    NovaVotacaoComponent,
    NovoCandidatoComponent
  ],
  providers: [],
  bootstrap: []
})
export class PaginaPrincipalModule { }

