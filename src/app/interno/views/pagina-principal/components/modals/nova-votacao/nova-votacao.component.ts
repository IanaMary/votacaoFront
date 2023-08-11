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

  candidatos = [{ nome: "Wagner", numero: 1, id: '1' },
  { nome: "Luiz", numero: 2, id: '2' },
  { nome: "Braga", numero: 3, id: '3' },
  { nome: "Bezerra", numero: 4, id: '4' }];

  valor = 0

 
  fechar(fechar: any){
    this.dialogRef.close({fechar, data: this.data.novoValorForm.value });
  }
}
