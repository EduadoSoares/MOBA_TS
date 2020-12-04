"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summoner = void 0;
var Personagem_1 = require("./Personagem");
var Summoner = /** @class */ (function (_super) {
    __extends(Summoner, _super);
    function Summoner(nome, vidaMax, vida, ataque, defesa, nivel, dano, skin) {
        var _this = _super.call(this, nome, vidaMax, vida, ataque, defesa, nivel, dano) || this;
        _this._skin = 0;
        return _this;
    }
    return Summoner;
}(Personagem_1.Personagem));
exports.Summoner = Summoner;
