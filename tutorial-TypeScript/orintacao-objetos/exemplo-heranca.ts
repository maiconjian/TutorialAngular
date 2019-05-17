class Funcionario{
    nome: string;
    salario:number;

    constructor(nome:string,salario:number){
        this.nome = nome;
        this.salario = salario;

    }

    pagarImposto(taxa:number=7.5){
        console.log(`Pagando  ${this.salario * taxa / 100 } de imposto`);
        
    }


}


class Secretario extends Funcionario{

}

class Executivo extends Funcionario{

    pagarImposto(taxa:number = 27.5){
        console.log("Executivo paga mais,");
        super.pagarImposto(taxa);// super referencia a classe Funcionario, que é a super classe do executivo.
                                 // fazendo a sobre escrita de metodo.
    }
}

let sara:Secretario = new Secretario('sara',2000);
sara.pagarImposto();


let jorge = new Executivo('jorge',30000);
jorge.pagarImposto();