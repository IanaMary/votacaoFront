import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovaVotacaoComponent } from '../components/modals/nova-votacao/nova-votacao.component';
import { MatDialog } from '@angular/material/dialog';
import { PaginaPrincipalService } from '../services/pagina-principal.service';

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
    });
  }

  ngOnInit() {
  
  }

  sair() {
    this.auth.removeLocalStorage().then(() => {
      this.route.navigate(['/autenticacao/login']);
    });
  }

  criarVotacao(): void {
    const dialogRef = this.dialog.open(NovaVotacaoComponent, {
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
        };
        this.paginaPrincipalService.salvarVotacao(votacao).subscribe(
          (res: any) => {
            console.log("res ", res)
          },
          (error: any) => { }
        );
      }

      this.formVotacao.reset();
    });
  }

  getRole() {
    return localStorage.getItem('role') === 'admin'
  }
}
