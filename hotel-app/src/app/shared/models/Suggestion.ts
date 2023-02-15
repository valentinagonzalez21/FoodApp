export class Suggestion{
    name!:string;
    email!:string;
    suggestionIdea!:string;

    constructor(name:string, email:string, suggestionIdea:string){
        this.name = name;
        this.email = email;
        this.suggestionIdea = suggestionIdea;
    }
}