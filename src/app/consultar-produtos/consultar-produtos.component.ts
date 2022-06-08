import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.component.html',
  styleUrls: ['./consultar-produtos.component.css']
})
export class ConsultarProdutosComponent implements OnInit {
  produtos: any[] = [];
  constructor( private httpClient : HttpClient) { }
//Método executado quando o componente é aberto
  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl +'/produtos').subscribe(
      (data)=> {
        this.produtos = data as any[];
      },
      (e) => {
        console.log(e);
      }
    )
  } 

  // função para fazer a exclusão do produto na API
  excluir(idProduto:number):void{
    if(window.confirm('Deseja realmente excluir o produto selecionado ?')){
      this.httpClient.delete(environment.apiUrl + "/produtos/" + idProduto,
      { responseType : 'text'})
      .subscribe(
        (data) =>{
          alert(data); // exibir mensagem em uma janela popup
          this.ngOnInit(); // recarregar a consulta de produtos
        },
        (e)=>{
          console.log(e);
        }
      )
    }
  }

}// fecha consultar-produtos.component.ts







