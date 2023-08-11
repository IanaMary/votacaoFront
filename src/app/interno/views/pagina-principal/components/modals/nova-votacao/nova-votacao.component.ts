import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-nova-votacao',
  templateUrl: './nova-votacao.component.html',
  styleUrls: ['./nova-votacao.component.scss']
})

export class NovaVotacaoComponent {
  constructor(
    public dialogRef: MatDialogRef<NovaVotacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  candidato : string = '';
  candidatos : Array<string> =  [];
  candidatoExistente : boolean = false;
  valor = 0

 
  fechar(fechar: any){
    this.dialogRef.close({fechar, data: this.data.novoValorForm.value });
  }

  adicionarCandidato() {
    this.candidatos.push(this.candidato);
    this.candidato = '';
  }

  jaExisteCandidatos(){
    this.candidatoExistente = this.candidatos.some(candidato => candidato.toLowerCase() === this.candidato.toLowerCase());
  }

  removerPilhas(index : number) {
    this.candidatos.splice(index, 1);
    this.candidatoExistente = this.candidatos.some(candidato => candidato === this.candidato);
  }
}
