import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chisiamo',
  templateUrl: './chisiamo.component.html',
  styleUrls: ['./chisiamo.component.scss']
})
export class ChisiamoComponent implements OnInit {

  motivazioni=[
    { span:"1",
      titolo:"Consegna sicura",
      descrizione:"La consegna avviene in tutta Italia tramite un servizio di tracciamento messo a disposizione del cliente,dopo aver effettuato l'acquisto."},
    { span:"2",
     titolo:"Pagamento sicuro",
     descrizione:"Il pagamento online avviene in maniera totalmente sicura e senza alcubn tipo di fregature.Inoltre accettiamo tutte le carte di credito e paypal."},
    { span:"3",
     titolo:"Garanzie sicurezza",
     descrizione:"Ogni prodotto da noi venduto dispone di una resa in caso di danno dovuto alla consegna e una garanzia minima di due anni."}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
