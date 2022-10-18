let nomeCliente = prompt("Digite o nome do cliente");
let qtdDinheiro = parseInt(prompt("Quanto em dinheiro deseja abastecer de gasolina?"));
let valorCompra = parseFloat(qtdDinheiro / 6.80);

alert(`O cliente abasteceu: ${valorCompra.toFixed(2)} litros.`);

let tpEmCelsius = parseInt(prompt("Digite a temperatura em graus Celsius: "));
let valorConversaoParaFahrenheit = parseFloat((9 * tpEmCelsius + 160)/5);

alert(`O valor ${tpEmCelsius}°C em Fahreinheit é: ${valorConversaoParaFahrenheit}`);

let tpEmFahreinheit = parseFloat(prompt("Digite a temperatura em Fahreinheit: "));
let valorCoversaoParaCelsius = parseFloat(((tpEmFahreinheit-32)*5)/9);

alert(`O valor ${tpEmFahreinheit}°F em Celsius é: ${valorCoversaoParaCelsius}`);

let comprimento = prompt("Digite o comprimento de uma caixa retangular em metros: ");
let largura = prompt("Digite a largura da caixa em metros: ");
let altura = prompt("Digite a altura da caixa em metros: ");
let valorVolume = parseFloat(comprimento * largura * altura);

alert(`O volume é de: ${valorVolume}`);

let numeroInteiro = parseInt(prompt("Digite um número inteiro e descubra o valor dele quando elevado ao quadrado: "));
let numeroAoQuadrado = parseInt(numeroInteiro**2);

alert(`O valor ${numeroInteiro} ao quadrado é: ${numeroAoQuadrado}`);

let notaUm = parseFloat(prompt("Digite um número: "));
let notaDois = parseFloat(prompt("Digite um número: "));
let notaTres = parseFloat(prompt("Digite um número: "));
let notaQuatro = parseFloat(prompt("Digite um número: "));
let notaCinco = parseFloat(prompt("Digite um número: "));
let somaNotas = parseFloat(notaUm + notaDois + notaTres + notaQuatro + notaCinco);
let mediaNotas = parseFloat(somaNotas/5);

alert(`A soma dos valores informados é: ${somaNotas} e a média das notas é: ${mediaNotas.toFixed(1)}`);

let valorInteiroUm = parseInt(prompt("Digite um valor inteiro positivo: "));
let valorInteiroDois = parseInt(prompt("Digite um segundo valor inteiro positivo: "));
let restoDivisao = parseInt(valorInteiroUm % valorInteiroDois);

alert(`O resto da divisão de ${valorInteiroUm} por ${valorInteiroDois} é: ${restoDivisao}`);

let texto = prompt("Digite seu texto: ");
let tamanho = texto.length;

alert(`Esse texto tem ${tamanho} caracteres.`);

let frase = prompt("Digite sua frase ou palavra: ");
let primeiraLetra = frase.substring(0);
let ultimaLetra = frase.substring(-1);
alert(`A primeira letra desse texto é ${primeiraLetra.toUpperCase} e a última é ${ultimaLetra.toLowerCase}.`);

let nome = prompt("Digite seu nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");
let idade = prompt("Digite sua idade: ");
let setor = prompt("Digite seu setor dentro da empresa: ");
let nomeCracha = nome.toUpperCase();
let sobrenomeCracha = sobrenome.toUpperCase();

alert(`nome: ${nomeCracha} ${sobrenomeCracha} - idade: ${idade} - setor: ${setor}`);