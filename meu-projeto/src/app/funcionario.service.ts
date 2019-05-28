export class FuncionarioService {

  ultimoId = 1;
  funcionarios = [
    {
      id: 0,
      nome: 'João'
    }
  ];

  adicionar(nome) {
    const funcionario = {
      id: ++this.ultimoId,
      // tslint:disable-next-line:object-literal-shorthand
      nome: nome
    };

    this.funcionarios.push(funcionario);
    console.log(this.funcionarios);
  }

  consultar() {
    return this.funcionarios;

  }
}
