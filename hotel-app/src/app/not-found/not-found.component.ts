import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  
  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = "No encontramos lo que buscas!";
  @Input() resetLinkText: string = "Reiniciar";
  @Input() resetLinkRoute: string = "/";
 
  ngOnInit(): void {
  
  }

  constructor(){

  }


}
