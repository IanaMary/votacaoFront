import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovaVotacaoComponent } from '../components/modals/nova-votacao/nova-votacao.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent {
  title = 'controleFinanceiro';

  novoValorForm: FormGroup;
  
  constructor(private readonly route: Router,
     private readonly auth: AuthService,
     private readonly formBuilder: FormBuilder,
     public dialog: MatDialog,) { 
      this.novoValorForm = this.formBuilder.group({
        nome: [null, [Validators.required]],
        descricao: [null, [Validators.required]],
        dataInicio: [null, [Validators.required]],
        dataFim: [null, [Validators.required]],
        candidatos: [[], []],
      });
     }

  sair(){
    this.auth.removeLocalStorage().then(() => {
      this.route.navigate(['/autenticacao/login']);
    });
  }

  criarVotacao(): void {
    const dialogRef = this.dialog.open(NovaVotacaoComponent, {
      data: { editar: false, novoValorForm: this.novoValorForm},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.fechar) {
        // const obj = {
        //   valor: result.data.valor,
        //   nome: result.data.nome,
        //   ano: this.anoAtual,
        //   mes: this.mesAtual
        // };
        // this.paginaPrincipalService.salvarContaEntrada(obj).subscribe(
        //   (res: any) => {

        //   },
        //   (error: any) => { }
        // );
      }

      this.novoValorForm.reset();
    });
  }
}
