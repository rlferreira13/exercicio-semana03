class Aluno {
  constructor(nome, cpf, codTurma) {
    this.nome = nome;
    this.cpf = cpf;
    this.codTurma = codTurma;
  }
  getNome() {
    return this.nome;
  }
  getCpf() {
    return this.cpf;
  }
  getCodTurma() {
    return this.codTurma;
  }
  imprimeDados(){
    console.log(this.nome, this.cpf, this.codTurma);
  }
}

let alunoNovo = new Aluno("Ricardo","123",1);
alunoNovo.imprimeDados();
console.log(alunoNovo.getNome());


let alunoNovo2 = new Aluno("Ricardo L","12345",2);
alunoNovo2.imprimeDados();
console.log(alunoNovo2.getCpf());

let alunoNovo3 = new Aluno("Wanessa","1234566",3);
alunoNovo3.imprimeDados();
console.log(alunoNovo3.getCodTurma());
