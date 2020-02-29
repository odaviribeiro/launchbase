/*
Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.

Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
*/



const nome2 = 'Davi';
const sexo = 'M';
const idade = 82;
const contribuicao = 23;

let soma = idade + contribuicao;

if (sexo === 'F' && (soma >= 85)) {
  console.log(`${nome2} você está aposentada com ${idade + contribuicao} anos de contribuição!`);
} else if (sexo === 'F' && (soma < 85)) {
  console.log(`${nome2} você não está aposentada.`);
} else {
  console.log(`${nome2} você não é uma mulher!`);
}

if (sexo === 'M' && (soma >= 95)) {
  console.log(`${nome2} você está aposentado com ${idade + contribuicao} anos de contribuição!`);
} else if (sexo === 'M' && (soma < 95)) {
  console.log(`${nome2} você não está aposentado.`);
} else {
  console.log(`${nome2} você não é um Homem!`);
}

// Neste meu sistema, caso você mude o sexo
// da pessoa para Feminino ele contará como
// Feminino e assim vice-versa.

// CÓDIGO DO PROFESSOR

const nomeProfessor = 'Silvia';
const sexoPessoa = 'F';
const idadePessoa = 68;
const contribuicaoPessoa = 34;

const calculoContribuicao = idadePessoa + contribuicaoPessoa;

// essas variáveis irão retornar true ou false
const homemPodeAposentar = sexoPessoa == 'M' && contribuicaoPessoa >= 35 && calculoContribuicao >= 95;
const mulherPodeAposentar = sexoPessoa == 'F' && contribuicaoPessoa >= 30 && calculoContribuicao >= 85;

if (homemPodeAposentar || mulherPodeAposentar) {
  console.log(`${nomeProfessor}, você pode se aposentar!`);
} else {
  console.log(`${nomeProfessor}, você não pode se aposentar!`);
}