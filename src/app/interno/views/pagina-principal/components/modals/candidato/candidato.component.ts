import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaginaPrincipalService } from '../../../services/pagina-principal.service';


@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})

export class CandidatoComponent {
  constructor(
    private readonly paginaPrincipalService: PaginaPrincipalService,
    public dialogRef: MatDialogRef<CandidatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  candidatos : Array<any> =  [];

  pagina = 1;
  pagOpcoes: number[] = [5, 10, 15, 20];
  limite = 5;
  votou : any;

  fechar(candidato : any, votou : boolean){
    this.dialogRef.close({idCandidato: candidato?.id, idVotacao: this.data.votacao.id, votou});
  }

  ngOnInit() {
    this.buscarCandidatos();
   }

  buscarCandidatos() {
    this.paginaPrincipalService.listarCandidatos(this.pagina, this.limite, this.data.votacao.id).subscribe(
      (res: any) => {
        this.candidatos = res.rows;
      },
      (error: any) => { }
    );
  }
}
