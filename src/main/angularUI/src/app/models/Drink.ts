export class Drink{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean=false;
    stars:number=0;
    imageUrl!:string;
    category!:string;
}