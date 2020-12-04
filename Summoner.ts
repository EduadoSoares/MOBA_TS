import { Personagem } from "./Personagem";

export class Summoner extends  Personagem {
    
        private _skin: number;

        constructor (nome: string,vidaMax:number,vida:number,ataque:number,defesa:number,nivel:number,dano:number, skin:number){
            super(nome,vidaMax,vida,ataque,defesa,nivel,dano)
            this._skin = 0;
                
        }
}

