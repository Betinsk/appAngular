import { Component, Input,OnChanges, OnInit } from '@angular/core';
import { Coracao } from 'src/shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {


  @Input() public tentativas: number | undefined 

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]
  constructor() { 
    console.log(this.coracoes)
    
  }

  ngOnChanges(){
    console.log('Tentativas recebidas', this.tentativas)

  }



  ngOnInit(): void {
  }

}
