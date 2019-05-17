class Client{
 
    nome:string;
    idade:number;

    constructor(nome:string,idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `olá eu sou ${this.nome} e tenho ${this.idade} anos`;
    }

}

let joao: Client = new Client('maicon',28);
let apresentar:string  = joao.apresentar();

let maria:Client = new Client('maria',30);




console.log(apresentar);
console.log(maria.apresentar());



