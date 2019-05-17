var Client = /** @class */ (function () {
    function Client(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Client.prototype.apresentar = function () {
        return "ol\u00E1 eu sou " + this.nome + " e tenho " + this.idade + " anos";
    };
    return Client;
}());
var joao = new Client('maicon', 28);
var apresentar = joao.apresentar();
var maria = new Client('maria', 30);
console.log(apresentar);
console.log(maria.apresentar());
