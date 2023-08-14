import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalGenericoComponent } from '../../../../../shared/components/modals/modal-generico/modal-generico.component';
import { PaginaPrincipalService } from '../../services/pagina-principal.service';
import { NovoValorComponent } from '../modals/novo-valor/novo-valor.component';
import { CandidatoComponent } from '../modals/candidato/candidato.component';

@Component({
  selector: 'app-votacao-lista',
  templateUrl: './votacao-lista.component.html',
  styleUrls: ['./votacao-lista.component.scss'],
})
export class VotacaoListaComponent implements OnInit {

  votacoes = [
    {
      titulo: 'Votação conselho',
      descricao: 'Pode votar',
      dataIniico: new Date(),
      dataFim: new Date(),
      status: 'andamento',
      multiVotos: true,
      votou: true,
      criado: 'Joao',
    },
    {
      titulo: 'Votação presidente',
      descricao: 'não pode votar',
      dataIniico: new Date(),
      dataFim: new Date(),
      status: 'andamento',
      multiVotos: false,
      votou: true,
      criado: 'Joao',
    },
    {
      titulo: 'Votação prefeitura',
      descricao: 'Pode votar',
      dataIniico: new Date(),
      dataFim: new Date(),
      status: 'andamento',
      multiVotos: true,
      votou: false,
      criado: 'Joao',
    },
    {
      titulo: 'Votação prefeitura',
      descricao: 'Pode votar',
      dataIniico: new Date(),
      dataFim: new Date(),
      status: 'andamento',
      multiVotos: true,
      votou: false,
      criado: 'Joao',
    },



  ]

  meses = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ];

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
  mesAtual = this.meses[new Date().getMonth()];
  anoAtual = new Date().getFullYear();
  anos = Array(10)
    .fill(0)
    .map((e, i) => this.anoAtual + i);



  pagina = 1;
  pagOpcoes: number[] = [5, 10, 15, 20];
  limite = 5;

  constructor(
    public dialog: MatDialog,
    private readonly formBuilder: FormBuilder,
    private readonly paginaPrincipalService: PaginaPrincipalService
  ) {}

  ngOnInit() {
   this.buscarVotacoes();
  }

  buscarVotacoes() {
    this.paginaPrincipalService.listarVotacoes(this.pagina, this.limite, this.mesAtual, this.anoAtual, this.status).subscribe(
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

    dialogRef.afterClosed().subscribe((result) => {});
  }

  getRole() {
    return localStorage.getItem('role') === 'admin'
  }
}
