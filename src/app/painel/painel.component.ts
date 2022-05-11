import { Component, OnInit } from '@angular/core';

import { Frase } from 'src/shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase!: Frase;

  public progresso: number = 0
  public tentativas: number = 3

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }
  
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(resposta)
  }

  public verificarResposta(): void {

    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta')

       //Trocar pergunta da rodada
          this.rodada ++

          //progresso
          this.progresso = this.progresso + (100 / this.frases.length)

          if(this.rodada === 4) {
            alert('Vc concluiu as traducoes com sucesso!')
          }

          //atualiza o objeto rodadaFrase
          this.atualizaRodada()

          }


    else {

      alert('A tradução está errada!')
      //Diminuir a variável tentativas
      this.tentativas --
      

      if(this.tentativas === -1) {
        alert('Game Over')
      }
    }
  
  }
   
public atualizaRodada(): void {

  //Define a frase da rodada com base em alguma lógica
  this.rodadaFrase = this.frases[this.rodada]

  //Limpa a resposta
  this.resposta = ''

}

}
