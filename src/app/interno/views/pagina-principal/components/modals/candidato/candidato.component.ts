import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})

export class CandidatoComponent {
  constructor(
    public dialogRef: MatDialogRef<CandidatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  candidatos = [{ nome: "Wagner", numero: 1, id: '1' },
  { nome: "Luiz", numero: 2, id: '2' },
  { nome: "Braga", numero: 3, id: '3' },
  { nome: "Bezerra", numero: 4, id: '4' }];

  valor = 0

  fechar(candidato : any, votar : boolean){
    this.dialogRef.close();
  }
}
