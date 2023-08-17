import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovaVotacaoComponent } from '../components/modals/nova-votacao/nova-votacao.component';
import { MatDialog } from '@angular/material/dialog';
import { PaginaPrincipalService } from '../services/pagina-principal.service';
import { NovoCandidatoComponent } from '../components/modals/novo-candidato/novo-candidato.component';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {
  title = 'controleFinanceiro';

  formVotacao: FormGroup;

  constructor(private readonly route: Router,
    private readonly auth: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly paginaPrincipalService: PaginaPrincipalService,
    public dialog: MatDialog,) {
    this.formVotacao = this.formBuilder.group({
      nome: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
      dataInicio: [null, [Validators.required]],
      dataFim: [null, [Validators.required]],
      candidatos: [[], []],
      multiVotos: [false, [Validators.required]],
    });
  }

  atualizarVotacoes = false;

  ngOnInit() {
    this.atualizarVotacoes = true;
  }

  sair() {
    this.auth.removeLocalStorage().then(() => {
      this.route.navigate(['/autenticacao/login']);
    });
  }

  criarVotacao(): void {
    const dialogRef = this.dialog.open(NovaVotacaoComponent, {
      width: '400px',
      data: { editar: false, formVotacao: this.formVotacao },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.fechar) {
        const votacao = {
          nome: result.data.nome,
          descricao: result.data.descricao,
          dataInicio: result.data.dataInicio,
          dataFim: result.data.dataFim,
          candidatos: result.data.candidatos,
          multiVotos:  result.data.multiVotos,
        };
        this.paginaPrincipalService.salvarVotacao(votacao).subscribe(
          (res: any) => {
          },
          (error: any) => { }
        );
      }

      this.formVotacao.reset();
    });
  }

  criarCandidato(): void {
    const dialogRef = this.dialog.open(NovoCandidatoComponent, {
      width: '400px',
      data: { editar: false, candidatos: [] },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.fechar) {
        const candidato = [{nome: 'teste'}, {nome: 'teste 1'}];
        this.paginaPrincipalService.salvarCandidato(candidato).subscribe(
          (res: any) => {
          },
          (error: any) => { }
        );
      }
    });
  }

  getRole() {
    return localStorage.getItem('role') === 'admin'
  }
}
