import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalGenericoComponent } from '../../../../../shared/components/modals/modal-generico/modal-generico.component';
import { PaginaPrincipalService } from '../../services/pagina-principal.service';
import { CandidatoComponent } from '../modals/candidato/candidato.component';

@Component({
  selector: 'app-votacao-lista',
  templateUrl: './votacao-lista.component.html',
  styleUrls: ['./votacao-lista.component.scss'],
})
export class VotacaoListaComponent implements OnChanges {

  @Input() atualizarVotacoes = false;

  votacoes : any = {}

  listaStatus = [
    {
      nome: 'Nova',
      valor: 'nova'
    },{
      nome: 'Em andamento',
      valor: 'andamento'
    },{
      nome: 'Encerrada',
      valor: 'encerrada'
    }
  ]
  status = '';
  votacoesCriadasPorMe = false;
  dataInicio = new Date();
  dataFim = new Date();


  pagina = 1;
  pagOpcoes: number[] = [5, 10, 15, 20];
  limite = 5;

  constructor(
    public dialog: MatDialog,
    private readonly formBuilder: FormBuilder,
    private readonly paginaPrincipalService: PaginaPrincipalService
  ) {}

  ngOnChanges() {
    if(this.atualizarVotacoes) {
      this.buscarVotacoes();
    }
  }

  buscarVotacoes() {
    this.paginaPrincipalService.listarVotacoes(this.pagina, this.limite, this.dataInicio, this.dataFim, this.status).subscribe(
      (res: any) => {
        this.votacoes = res;
      },
      (error: any) => { }
    );
  }


  paginacao(p: any, bool: boolean) {
    this.limite = p.pageSize;
    this.pagina = 1;
    this.buscarVotacoes();
  }

  verOuVotarcandidatos(votacao : any, votar: boolean){
    const dialogRef = this.dialog.open(CandidatoComponent, {
      data: { votacao, votar },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result.votou) {
        const voto = {
          idVotacao: result.idVotacao,
          idCandidato: result.idCandidato,
        };
        this.paginaPrincipalService.salvarVoto(voto).subscribe(
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
