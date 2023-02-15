export class Food{

    id!:number;  //el ! es mandatory, ? es opcional
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageUrl!:string;
    origins!: string;
}