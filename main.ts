import prompt from 'prompt-sync';
import { Summoner } from "./Summoner";
import { Personagem } from "./Personagem";



// TOP LINE
let Camile : Personagem = new Summoner("Camile",575,575,68,35,1,0,0)

let Volibear : Personagem =  new Summoner("Volibear",580,580,60,31,1,0,0)


// JUNG LINE
let Kayn : Personagem = new Summoner("Kayn",585,585,68,38,1,0,0)

let MasterYi : Personagem = new Summoner("Master Yi",598,598,66,33,1,0,0)


// MID LINE
let Yasuo : Personagem = new Summoner("Yasuo",490,490,60,30,1,0,0)

let Galio : Personagem = new Summoner("Galio",562,562,59,24,1,0,0)


// BOT LINE
let Jhin : Personagem = new Summoner("Jhin",585,585,59,24,1,0,0)

let Ashe : Personagem = new Summoner("Ashe",570,570,59,26,1,0,0)


// ADC LINE
let Leona : Personagem = new Summoner("Leona",576,576,60,50,1,0,0)

let Alistar : Personagem = new Summoner("Alistar",600,600,62,44,1,0,0)


//Todos os CAMPEÕES
let campeoes = [Camile,Volibear,Kayn,MasterYi,Yasuo,Galio,Jhin,Ashe,Leona,Alistar]
//=============================================================================================



let teclado = prompt();
let option: Number = 0;
let option02: Number = 0;
let campJogador: Personagem = new Summoner(" ",0,0,0,0,0,0,0);
let campInimigo: Personagem = new Summoner(" ",0,0,0,0,0,0,0);
let voltaBase: number = 0;
let ganks: number = 0;
let escolhaIinimiga: number = 0

console.log('+********************************************+')
console.log('+              Bem vindo ao XXX              +')
console.log('+           Este jogo basea-se em            +')
console.log('+            escolher um Campeão             +')
console.log('+         e batalhar com os outros           +')
console.log('+                                            +')
console.log('+********************************************+')

while (option != 9) {
    console.log('+********************************************+')
    console.log('+  Escolha a posição que gostaria de jogar   +')
    console.log('+  1. TOP                                    +')
    console.log('+  2. JUNG                                   +')
    console.log('+  3. MID                                    +')
    console.log('+  4. BOT                                    +')
    console.log('+  5. ADC                                    +')
    console.log('+  9. Para ENCERRAR O JOGO                   +')
    console.log('+********************************************+')

    option = +teclado('Escolha: ')
    if(option == 9){
        break
    }
    switch (option) {
        case 1:
            console.log('+********************************************+')
            console.log('+  Escolha o CAMPEÃO da rota                 +')
            console.log('+  1. Camile                                 +')
            console.log('+  2. Volibear                               +')
            console.log('+********************************************+')
                let escolha = prompt();
                let Campeao: Number = 0;
                Campeao = + escolha('Escolha: ')
                switch (Campeao) {
                    case 1:
                        campJogador = campeoes[0]
                        escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);

                        while (escolhaIinimiga == 0){
                            escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);
                        }
                    campInimigo = campeoes[escolhaIinimiga]
                        console.log('+********************************************+')
                        console.log(`+  Jogador:                                  +`)
                        console.log(campJogador)
                        console.log('+                                            +')
                        console.log(`+  Inimigo:                                  +`)
                        console.log(campInimigo)
                        console.log('+********************************************+')
                        break;
                
                    default:
                        campJogador = campeoes[1]
                        escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);

                            while (escolhaIinimiga == 1){
                                escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);
                            }
                        campInimigo = campeoes[escolhaIinimiga]
                        console.log('+********************************************+')
                        console.log(`+  Jogador:                                  +`)
                        console.log(campJogador)
                        console.log('+                                            +')
                        console.log(`+  Inimigo:                                  +`)
                        console.log(campInimigo)
                        console.log('+********************************************+')
                        break;
                }
            break;
        case 2:
            console.log('+********************************************+')
            console.log('+  Escolha o CAMPEÃO da rota                 +')
            console.log('+  1. Kayn                                   +')
            console.log('+  2. Master Yi                              +')
            console.log('+********************************************+')
                let escolha02 = prompt();
                let Campeao02: Number = 0;
                Campeao02 = + escolha02('Escolha: ')
                switch (Campeao02) {
                    case 1:
                        campJogador = campeoes[2]
                        escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);

                        while (escolhaIinimiga == 2){
                            escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);
                        }
                    campInimigo = campeoes[escolhaIinimiga]
                        console.log('+********************************************+')
                        console.log(`+  Jogador:                                  +`)
                        console.log(campJogador)
                        console.log('+                                            +')
                        console.log(`+  Inimigo:                                  +`)
                        console.log(campInimigo)
                        console.log('+********************************************+')
                        break;
                
                    default:
                        campJogador = campeoes[3]
                        escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);

                        while (escolhaIinimiga == 3){
                            escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);
                        }
                    campInimigo = campeoes[escolhaIinimiga]
                        console.log('+********************************************+')
                        console.log(`+  Jogador:                                  +`)
                        console.log(campJogador)
                        console.log('+                                            +')
                        console.log(`+  Inimigo:                                  +`)
                        console.log(campInimigo)
                        console.log('+********************************************+')
                        break;
                }
            break;
        case 3:
            console.log('+********************************************+')
            console.log('+  Escolha o CAMPEÃO da rota                 +')
            console.log('+  1. Yasuo                                  +')
            console.log('+  2. Galio                                  +')
            console.log('+********************************************+')
                let escolha03 = prompt();
                let Campeao03: Number = 0;
                Campeao03 = + escolha03('Escolha: ')
                switch (Campeao03) {
                    case 1:
                        campJogador = campeoes[4]
                        escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);

                        while (escolhaIinimiga == 4){
                            escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);
                        }
                    campInimigo = campeoes[escolhaIinimiga]
                        console.log('+********************************************+')
                        console.log(`+  Jogador:                                  +`)
                        console.log(campJogador)
                        console.log('+                                            +')
                        console.log(`+  Inimigo:                                  +`)
                        console.log(campInimigo)
                        console.log('+********************************************+')
                        break;
                
                    default:
                        campJogador = campeoes[5]
                        escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);

                        while (escolhaIinimiga == 5){
                            escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);
                        }
                    campInimigo = campeoes[escolhaIinimiga]
                        console.log('+********************************************+')
                        console.log(`+  Jogador:                                  +`)
                        console.log(campJogador)
                        console.log('+                                            +')
                        console.log(`+  Inimigo:                                  +`)
                        console.log(campInimigo)
                        console.log('+********************************************+')
                        break;
                }
            break;
        case 4:
            console.log('+********************************************+')
            console.log('+  Escolha o CAMPEÃO da rota                 +')
            console.log('+  1. Jhin                                   +')
            console.log('+  2. Ashe                                   +')
            console.log('+********************************************+')
                let escolha04 = prompt();
                let Campeao04: Number = 0;
                Campeao04 = + escolha04('Escolha: ')
                switch (Campeao04) {
                    case 1:
                        campJogador = campeoes[6]
                        escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);

                        while (escolhaIinimiga == 6){
                            escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);
                        }
                    campInimigo = campeoes[escolhaIinimiga]
                        console.log('+********************************************+')
                        console.log(`+  Jogador:                                  +`)
                        console.log(campJogador)
                        console.log('+                                            +')
                        console.log(`+  Inimigo:                                  +`)
                        console.log(campInimigo)
                        console.log('+********************************************+')
                        break;
                
                    default:
                        campJogador = campeoes[7]
                        escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);

                        while (escolhaIinimiga == 7){
                            escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);
                        }
                    campInimigo = campeoes[escolhaIinimiga]
                        console.log('+********************************************+')
                        console.log(`+  Jogador:                                  +`)
                        console.log(campJogador)
                        console.log('+                                            +')
                        console.log(`+  Inimigo:                                  +`)
                        console.log(campInimigo)
                        console.log('+********************************************+')
                        break;
                }
            break;
        case 5:
            console.log('+********************************************+')
            console.log('+  Escolha o CAMPEÃO da rota                 +')
            console.log('+  1. Leona                                  +')
            console.log('+  2. Alistar                                +')
            console.log('+********************************************+')
                let escolha05 = prompt();
                let Campeao05: Number = 0;
                Campeao05 = + escolha05('Escolha: ')
                switch (Campeao05) {
                    case 1:
                        campJogador = campeoes[8]
                        escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);

                        while (escolhaIinimiga == 8){
                            escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);
                        }
                    campInimigo = campeoes[escolhaIinimiga]
                        console.log('+********************************************+')
                        console.log(`+  Jogador:                                  +`)
                        console.log(campJogador)
                        console.log('+                                            +')
                        console.log(`+  Inimigo:                                  +`)
                        console.log(campInimigo)
                        console.log('+********************************************+')
                    break;
                
                    default:
                        campJogador = campeoes[9]
                        escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);

                        while (escolhaIinimiga == 9){
                            escolhaIinimiga = +(Math.random()*campeoes.length).toFixed(0);
                        }
                    campInimigo = campeoes[escolhaIinimiga]
                        console.log('+********************************************+')
                        console.log(`+  Jogador:                                  +`)
                        console.log(campJogador)
                        console.log('+                                            +')
                        console.log(`+  Inimigo:                                  +`)
                        console.log(campInimigo)
                        console.log('+********************************************+')
                       
                        break;
                }
            
        break;
    }
    console.log('+********************************************+')
    console.log('+  Importante:                               +')
    console.log('+  1 - Para vencer o jogo, é necessario      +')
    console.log('+      eliminar o inimigo 3 vezes.           +')
    console.log('+  2 - Você possui somente 3 teletransportes +')
    console.log('+      para voltar a base e recuperar a vida.+')
    console.log('+********************************************+')

    console.log('+********************************************+')
    console.log('+  Campeão escolhido!!                       +')
    console.log('+                                            +')
    console.log('+  Tropas liberadas!                         +')
    console.log('+********************************************+')
    
    while (option02 != 6){
    console.log('+********************************************+')
    console.log('+  Escolha oque deseja fazer                 +')
    console.log('+  1. Farmar tropas                          +')
    console.log('+  2. Farmar selva                           +')
    console.log('+  3. Voltar base                            +')
    console.log('+  4. Lutar contra Campeão                   +')
    console.log('+  5. Mostrar status                         +')
    console.log('+  6. Desistir                               +')
    console.log('+********************************************+')
        
    option02 = +teclado('Escolha: ');

    switch (option02) {
        case 1:
            campJogador.tropas();
            campJogador.nivelUP();
            console.log(campJogador.status());
            if(campJogador.isDead()){
                option02 = 6
            }


            campInimigo.tropas();
            campInimigo.nivelUP();
            if(campInimigo.isDead2()){
                ganks += 1
                campInimigo.base(campInimigo.vidaMax)
            }

            break
        case 2:
            campJogador.tropas();
            campJogador.nivelUP();
            campJogador.nivelUP();
            console.log(campJogador.status());
            if(campJogador.isDead()){
                option02 = 6
            }


            campInimigo.tropas();
            campInimigo.nivelUP();
            if(campInimigo.isDead2()){
                ganks += 1
                campInimigo.base(campInimigo.vidaMax)
            }

            break
        case 3:
            if (voltaBase >= 3){
                console.log('+*************************************************+')
                console.log(`+                       ${voltaBase}/3                       +`);
                console.log(`+Você não possui mais teletranspostes para a base!+`);
                console.log('+*************************************************+')

            } else{
            let vidaOrigin: number = campJogador.vidaMax
            campJogador.base(vidaOrigin);
            campJogador.isDead();
            console.log(campJogador.status());

            let vidaOrigin02: number = campInimigo.vidaMax
            campInimigo.base(vidaOrigin02);
            campInimigo.isDead2();
            }
            voltaBase += 1;
            console.log('+********************************************+')
            console.log(`+                       ${voltaBase}/3                  +`);
            console.log('+********************************************+')
            break;
        case 4:
            
            if(ganks < 3) {
              
                campInimigo.dano = +(campJogador.ataque - campInimigo.defesa).toFixed(0)
                campJogador.dano = +(campInimigo.ataque - campJogador.defesa).toFixed(0)
              
                campJogador.luta();
                campInimigo.luta();
            
                console.log(campJogador.status());
                
                if(campJogador.isDead()){
                    option02 = 6
                } else {
                    
                    if (campInimigo.isDead2()) {
                    console.log(campJogador.venceu());
                    campJogador.nivelUP();
                    campInimigo.base(campInimigo.vidaMax)
                    ganks += 1 ;
                    } else{
                        console.log(campJogador.empate())
                    }

                    console.log('+********************************************+')
                    console.log(`+                       ${ganks}/3                  +`);
                    console.log('+********************************************+')
                    
                }

                if (ganks >= 3){
                    console.log('+********************************************+')
                    console.log(`+                    ${ganks}/3                     +`);
                    console.log(`+                    Ace!                    +`);
                    console.log('+********************************************+')
                    console.log(campJogador.vitoria());
                    option02 = 6
                } 
                
                
            }
            break;
        case 5:
            console.log('+********************************************+')
            console.log(`Jogador: `)
            console.log(campJogador.status());
            console.log('+********************************************+')
            console.log(`Inimigo: `)
            console.log(campInimigo.status());
            console.log('+********************************************+')
            break;
        case 6:
            console.log(campJogador.derrota());
        break;
    }
    
    }
    option02 = 0
    console.log(campJogador.reinicio())
}