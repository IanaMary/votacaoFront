import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-novo-candidato',
  templateUrl: './novo-candidato.component.html',
  styleUrls: ['./novo-candidato.component.scss']
})

export class NovoCandidatoComponent {
  constructor(
    public dialogRef: MatDialogRef<NovoCandidatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  candidato : any = {
    nome: '',
  };
  candidatos : Array<any> =  [];
  candidatoExistente : boolean = false;
  valor = 0

 
  fechar(fechar: any){
    this.dialogRef.close({fechar, candidatos: this.candidatos });
  }

  adicionarCandidato() {
    this.candidatos.push(this.candidato);
    this.candidato = '';
  }

  jaExisteCandidatos(){
    this.candidatoExistente = this.candidatos.some(candidato => candidato.toLowerCase() === this.candidato.toLowerCase());
  }

  removerCandidatos(index : number) {
    this.candidatos.splice(index, 1);
    this.candidatoExistente = this.candidatos.some(candidato => candidato === this.candidato);
  }
}
