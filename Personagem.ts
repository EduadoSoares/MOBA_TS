
export class Personagem {

        protected _nome: string;
        protected _vidaMax: number;
        protected _vida: number;
        protected _ataque: number;
        protected _defesa: number;
        protected _nivel: number;
        protected _dano: number;
    
    
    constructor (nome: string,vidaMax:number,vida:number,ataque:number,defesa:number,nivel:number,dano:number) {
        this._nome = nome;
        this._vidaMax = vidaMax;
        this._vida = vida;
        this._ataque = ataque;
        this._defesa = defesa;
        this._nivel = nivel;
        this._dano = dano;
    }



public status(): string {
    return (
        ("Campeão: " )+
        ("\nNome: " + this._nome) +
        ("\nVida: " + this._vida.toFixed(0)) + 
        ("\nAtaque: " + this._ataque.toFixed(0)) + 
        ("\nDefesa: " + this._defesa.toFixed(0)) + 
        ("\nNivel: " + this._nivel)
        );
}

public get name() : string {
    return this._nome
}
public set nome (nome: string) {
    this._nome = nome;
}

public get vidaMax() : number {
    return this._vidaMax;
}
public set vidaMax(vidaMax: number)  {
    this._vidaMax = vidaMax
}

public get vida() : number {
    return this._vida;
}
public set vida(vida: number)  {
    this._vida = vida
}

public get ataque() : number {
    return this._ataque;
}
public set ataque(ataque: number)  {
    this._ataque = ataque
}

public get defesa() : number {
    return this._defesa;
}
public set defesa(defesa: number)  {
    this._defesa = defesa
}

public get nivel() : number {
    return this._nivel;
}
public set nivel(nivel: number)  {
    this._nivel = nivel
}
public get dano() : number {
    return this._dano;
}
public set dano (dano: number) {
    this._dano = dano;
}


//Logica
public tropas(): void {
    this._vida -= +(this.randomizar(100)).toFixed(0);
}
public selva(): void {
    this._vida -= +(this.randomizar(300)).toFixed(0);
}
public base(vidaOrigin: number): void {
    this._vida += +Math.abs(vidaOrigin)
}


public luta(): void {
    if (this._vida == this._dano){
        this._vida = 0
    }

    this._vida -= +(this._dano).toFixed(0) 
   
}
public nivelUP(): void {6
    if (this._nivel >= 18){

    } else {
        this._ataque += +(this.randomizar(50)).toFixed(0);
        this._defesa += +(this.randomizar(30)).toFixed(0);
        this._nivel += 1;
    }
    
}
public derrota(): string {
    return(
    ('+********************************************+') + 
    ('\n+               Fim de Jogo                  +') + 
    ('\n+                                            +') +
    ('\n+                 Derrota                    +') +
    ('\n+********************************************+')
    );
}
public venceu(): string {
    return(
        ('+********************************************+') +
        ('\n+        Você derrotou o adversário          +') +
        ('\n+********************************************+')
        );
}
public empate(): string {
    return(
        ('+********************************************+') +
        ('\n+                 Empate                     +') +
        ('\n+********************************************+')
        );
}
public vitoria(): string {
    return(
    ('+********************************************+') +
    ('\n+               Fim de Jogo                  +') + 
    ('\n+                                            +') + 
    ('\n+                 Vitória                    +') +
    ('\n+********************************************+')
    );
}
public isDead(): boolean {
    if (this._vida <= 0){
        console.log('+********************************************+')
        console.log('+               Você morreu!                 +')
        console.log('+********************************************+')
        this._vida -= +(this._vida - this._dano).toFixed(0)
        return true;
    } else {
        return false;
    }
    
}
public isDead2(): boolean {
    if (this._vida <= 0){
        console.log('+********************************************+')
        console.log('+               Inimigo morreu!              +')
        console.log('+********************************************+')
        this._vida -= +(this._vida - this._dano).toFixed(0)
        return true;
    } else {
        return false;
    }
    
}
public reinicio(): string {
    return(
        ('+********************************************+') +
        ('\n+             Jogo reiniciado                +') +
        ('\n+********************************************+')
    );
}

private randomizar(fator: number):number {
    return (Math.random() * fator);
}



}
