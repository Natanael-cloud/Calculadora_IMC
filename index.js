// Obtém o botão de calcular pelo seu ID
const calcular = document.getElementById('calcular');

// Função principal para calcular o IMC
function imc() {
  // Captura os valores dos campos de input (nome, altura, peso)
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;

  // Captura a área onde o resultado será exibido
  const resultado = document.getElementById('resultado');

  // Verifica se todos os campos foram preenchidos
  if (nome && altura !== '' && peso !== '') {
    // Calcula o IMC: peso dividido pela altura ao quadrado e arredonda para 1 casa decimal
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    // Variável para armazenar a classificação do IMC
    let classificaçao = "";

    // Classifica o IMC com base no valor calculado
    if (valorIMC < 18.5) {
      classificaçao = 'abaixo do peso.'; // IMC menor que 18.5 é considerado abaixo do peso
    } else if (valorIMC < 25) {
      classificaçao = 'com peso ideal. Parabéns!!!'; // IMC entre 18.5 e 24.9 é peso ideal
    } else if (valorIMC < 30) {
      classificaçao = 'levemente acima do peso.'; // IMC entre 25 e 29.9 é levemente acima do peso
    } else if (valorIMC < 35) {
      classificaçao = 'com obesidade grau I.'; // IMC entre 30 e 34.9 é obesidade grau I
    } else if (valorIMC < 40) {
      classificaçao = 'obesidade grau II'; // IMC entre 35 e 39.9 é obesidade grau II
    } else {
      classificaçao = 'com obesidade grau III. Cuidado!!!'; // IMC maior que 40 é obesidade grau III
    }

    // Exibe o resultado no elemento "resultado", com o nome do usuário, o valor do IMC e a classificação
    resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificaçao}`;
  } else {
    // Caso algum campo não tenha sido preenchido, exibe uma mensagem de aviso
    resultado.textContent = 'Preencha todos os campos';
  }
}

// Adiciona um "listener" de evento ao botão calcular. Quando o botão for clicado, a função imc() será chamada.
calcular.addEventListener('click', imc);

