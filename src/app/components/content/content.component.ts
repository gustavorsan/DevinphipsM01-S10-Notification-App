import { Component, OnInit } from '@angular/core';
import { INotificacao } from 'src/app/models/notificacao.model';
import { NOTIFICATIONS_MOCK } from 'src/app/utils/notifications-mock';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  listaDeNotificacoes: INotificacao[] = [];

  ngOnInit(): void {
    this.listaDeNotificacoes = NOTIFICATIONS_MOCK;
  }

  lerNotificacao(indice: number) {
    console.log('indice', indice);

    this.listaDeNotificacoes.forEach((item, index) => {
      if (index === indice) {
        item.lido = true;
      }

      return item;
    });
  }



  filterItens(filterType:any){
    
   let  currentItens: INotificacao[] = [];
    
   switch(filterType){
      case 'lidos': currentItens = NOTIFICATIONS_MOCK.filter(notificacao => {return notificacao.lido}) 
            break;
      case 'naoLidos': currentItens = NOTIFICATIONS_MOCK.filter(notificacao => {return !notificacao.lido}) 
            break;
      default: currentItens = NOTIFICATIONS_MOCK;
        break
   }


   this.listaDeNotificacoes = currentItens;
  }
}