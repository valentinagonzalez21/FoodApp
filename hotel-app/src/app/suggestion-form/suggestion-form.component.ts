import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Suggestion } from '../shared/models/Suggestion';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent implements OnInit {
  
  nameVar:string = '';
  emailVar:string = '';
  suggestionVar: string = '';
  newSuggestion = new Suggestion('', '', '');
  
  constructor(){}
  
  ngOnInit(): void {
  
  }

  onSubmit(f:NgForm):void{
    this.newSuggestion.name = this.nameVar;
    this.newSuggestion.email = this.emailVar;
    this.newSuggestion.suggestionIdea = this.suggestionVar;
    
      // send newSuggestion to back through service

    f.reset();
    console.log(this.newSuggestion);
    alert('Tu sugerencia ha sido enviada')

  
    
    
  }

  checkMail(mail:string){

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
      {
        return (true)
      }
        return (false)

  }

}
