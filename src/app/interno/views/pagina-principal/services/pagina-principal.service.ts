import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PaginaPrincipalService {
  url = environment.apiUrl;

  private readonly endpointVotacao: string = 'votacoes';
  private readonly endpointCandidatos: string = 'candidatos';
  private readonly endpointVotos: string = 'votos';
  token = localStorage.getItem('authToken');
  obj = {
    access_token: this.token,
  };
  httpOptions = {
    headers: {  'Authorization': 'Bearer ' + this.token},
  };
  idUsuario = localStorage.getItem('id');

  constructor(private http: HttpClient) {}


  // VOTAÇÃO

  salvarVotacao(body: any) {
    return this.http.post(`${this.url}${this.endpointVotacao}`, body, this.httpOptions);
  }

  listarVotacoes(page: number, limit: number, dataInicio: Date, dataFim: Date, status:string) {
    return this.http.get(`${this.url}${this.endpointVotacao}?page=${page}&limit=${limit}&dataInicio=${dataInicio}&dataFim=${dataFim}&status=${status}`, this.httpOptions);
  }

  // CANDIDATOS

  salvarCandidato(body: any) {
    return this.http.post(`${this.url}${this.endpointCandidatos}`, body, this.httpOptions);
  }

  listarCandidatos(page: number, limit: number, idVotacao?: string) {
    if(idVotacao) {
      return this.http.get(`${this.url}${this.endpointCandidatos}?page=${page}&limit=${limit}&idVotacao=${idVotacao}`, this.httpOptions);
    } else{
      return this.http.get(`${this.url}${this.endpointCandidatos}?page=${page}&limit=${limit}`, this.httpOptions);
    }
    
  }


  // VOTOS

  salvarVoto(body: any) {
    return this.http.post(`${this.url}${this.endpointVotos}`, body, this.httpOptions);
  }



}
