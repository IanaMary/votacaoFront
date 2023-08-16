import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaginaPrincipalService } from '../../../services/pagina-principal.service';


@Component({
  selector: 'app-nova-votacao',
  templateUrl: './nova-votacao.component.html',
  styleUrls: ['./nova-votacao.component.scss']
})

export class NovaVotacaoComponent implements OnInit  {
  constructor(
    public dialogRef: MatDialogRef<NovaVotacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly paginaPrincipalService: PaginaPrincipalService,
  ) {}

  candidatos : Array<any> =  [];
  candidatosS : Array<any> =  [];
  

  pagina = 1;
  pagOpcoes: number[] = [5, 10, 15, 20];
  limite = 5;

 
  fechar(fechar: any){
    this.dialogRef.close({fechar, data: this.data.formVotacao.value });
  }

  ngOnInit() {
    this.buscarCandidatos();
   }

  buscarCandidatos() {
    this.paginaPrincipalService.listarCandidatos(this.pagina, this.limite).subscribe(
      (res: any) => {
        this.candidatos = res.rows;
      },
      (error: any) => { }
    );
  }

 
}
