const nome = "Luana";
const cidade = "Assis Chateaubriand";
const anoNascimento = 2010;
const anoAtual = 2026;

const Idade = anoAtual - anoNascimento;

const Fraseziha = `Meu nome é ${nome}, sou de ${cidade} e tenho ${Idade} anos.`;

console.log(Frasezinha);

alert(Frasezinha);

document.getElementById("saida").textContent= Frasezinha;
