"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(nome, vidaMax, vida, ataque, defesa, nivel, dano) {
        this._nome = nome;
        this._vidaMax = vidaMax;
        this._vida = vida;
        this._ataque = ataque;
        this._defesa = defesa;
        this._nivel = nivel;
        this._dano = dano;
    }
    Personagem.prototype.status = function () {
        return (("Campeão: ") +
            ("\nNome: " + this._nome) +
            ("\nVida: " + this._vida.toFixed(0)) +
            ("\nAtaque: " + this._ataque.toFixed(0)) +
            ("\nDefesa: " + this._defesa.toFixed(0)) +
            ("\nNivel: " + this._nivel));
    };
    Object.defineProperty(Personagem.prototype, "name", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "nome", {
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "vidaMax", {
        get: function () {
            return this._vidaMax;
        },
        set: function (vidaMax) {
            this._vidaMax = vidaMax;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "vida", {
        get: function () {
            return this._vida;
        },
        set: function (vida) {
            this._vida = vida;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "ataque", {
        get: function () {
            return this._ataque;
        },
        set: function (ataque) {
            this._ataque = ataque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "defesa", {
        get: function () {
            return this._defesa;
        },
        set: function (defesa) {
            this._defesa = defesa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "nivel", {
        get: function () {
            return this._nivel;
        },
        set: function (nivel) {
            this._nivel = nivel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "dano", {
        get: function () {
            return this._dano;
        },
        set: function (dano) {
            this._dano = dano;
        },
        enumerable: false,
        configurable: true
    });
    //Logica
    Personagem.prototype.tropas = function () {
        this._vida -= +(this.randomizar(100)).toFixed(0);
    };
    Personagem.prototype.selva = function () {
        this._vida -= +(this.randomizar(300)).toFixed(0);
    };
    Personagem.prototype.base = function (vidaOrigin) {
        this._vida += +Math.abs(vidaOrigin);
    };
    Personagem.prototype.luta = function () {
        if (this._vida == this._dano) {
            this._vida = 0;
        }
        this._vida -= +(this._dano).toFixed(0);
    };
    Personagem.prototype.nivelUP = function () {
        6;
        if (this._nivel >= 18) {
        }
        else {
            this._ataque += +(this.randomizar(50)).toFixed(0);
            this._defesa += +(this.randomizar(30)).toFixed(0);
            this._nivel += 1;
        }
    };
    Personagem.prototype.derrota = function () {
        return (('+********************************************+') +
            ('\n+               Fim de Jogo                  +') +
            ('\n+                                            +') +
            ('\n+                 Derrota                    +') +
            ('\n+********************************************+'));
    };
    Personagem.prototype.venceu = function () {
        return (('+********************************************+') +
            ('\n+        Você derrotou o adversário          +') +
            ('\n+********************************************+'));
    };
    Personagem.prototype.empate = function () {
        return (('+********************************************+') +
            ('\n+                 Empate                     +') +
            ('\n+********************************************+'));
    };
    Personagem.prototype.vitoria = function () {
        return (('+********************************************+') +
            ('\n+               Fim de Jogo                  +') +
            ('\n+                                            +') +
            ('\n+                 Vitória                    +') +
            ('\n+********************************************+'));
    };
    Personagem.prototype.isDead = function () {
        if (this._vida <= 0) {
            console.log('+********************************************+');
            console.log('+               Você morreu!                 +');
            console.log('+********************************************+');
            this._vida -= +(this._vida - this._dano).toFixed(0);
            return true;
        }
        else {
            return false;
        }
    };
    Personagem.prototype.isDead2 = function () {
        if (this._vida <= 0) {
            console.log('+********************************************+');
            console.log('+               Inimigo morreu!              +');
            console.log('+********************************************+');
            this._vida -= +(this._vida - this._dano).toFixed(0);
            return true;
        }
        else {
            return false;
        }
    };
    Personagem.prototype.reinicio = function () {
        return (('+********************************************+') +
            ('\n+             Jogo reiniciado                +') +
            ('\n+********************************************+'));
    };
    Personagem.prototype.randomizar = function (fator) {
        return (Math.random() * fator);
    };
    return Personagem;
}());
exports.Personagem = Personagem;
