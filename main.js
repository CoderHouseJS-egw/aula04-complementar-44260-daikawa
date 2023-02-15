/**
 * Desafio Complementar: Funções Relacionadas
 * Turma 44260 Javascript
 * Erica Daikawa
 */

/** primeira função: somar - arrow function/ função seta */
const somar = (a, b) => a + b;

/** segunda função: subtrair - arrow function/ função seta */
const subtrair = (a, b) => a - b;

/** terceira função: ICMS - arrow function/ função seta */
const ICMS = (x) => x * 0.21;

/** prompt */
alert("Calculadora de preço - com ICMS e desconto. Boas vendas!");
let precoProduto = parseInt(prompt("Qual o preço do produto? "));
let desconto = 0;
let concederDesconto = prompt("Conceder desconto? digite sim ou não: ");
if (concederDesconto == "sim") {
  let comDesconto = prompt("Digite o valor do desconto");
  desconto = comDesconto;
} else if (concederDesconto == "não") {
  desconto = 0;
  alert("ok, prossiga");
}

/** usando as três funções relacionadas */
let novoPreco = subtrair(somar(precoProduto, ICMS(precoProduto)), desconto);
alert(
  "Valor do produto: R$ " +
    precoProduto +
    "\nICMS: R$ " +
    ICMS(precoProduto) +
    "\nDesconto: R$ " +
    desconto +
    "\nValor Final: R$ " +
    novoPreco
);

/** quinta função: recarregarAPagina */
const recarregarAPagina = () => {
  window.location.reload();
};
