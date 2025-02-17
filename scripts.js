function inserirValor(value) {
  let inserido = document.getElementById('display').value += value;
  console.log(inserido)

  let expressao = document.getElementById('historico');
  expressao.innerHTML = inserido;

  // Atualizar o valor atual no localStorage
  localStorage.setItem('currentDisplay', inserido);
  inserido.innerHTML = '';
}

function calcular() {
  var exibeValor = document.getElementById('display').value;
  var resultado = eval(exibeValor); /* eval() é usada para avaliar a expressão matemática dentro da string displayValue */
  
  // Salvar o cálculo realizado no histórico
  let historicoAnterior = localStorage.getItem('historico') || ''; // Pegue o histórico atual ou uma string vazia
  let calculo = `${exibeValor} = ${resultado}`;
  
  // Adicionar o cálculo ao histórico
  let novoHistorico = historicoAnterior ? historicoAnterior + '<br>' + calculo : calculo;
  
  // Salvar o novo histórico no localStorage
  localStorage.setItem('historico', novoHistorico);

  // Exibir o resultado no display
  document.getElementById('display').value = resultado;
}

// Exibe todo o histórico do localStorage
function exibirHistorico() {
  let historico = document.getElementById('historico');
  let historicoSalvo = localStorage.getItem('historico');
  
  // let guardarSection = document.querySelector('section');
  // guardarSection.innerHTML = historicoSalvo;

  // Exibir o histórico armazenado na div
  historico.innerHTML = historicoSalvo ? historicoSalvo : 'Nenhum histórico disponível';
}

// Limpa o resultado do display
function limparResultado() {
  display.value = '';
}

// Limpa o histórico do localStorage
function limparHistorico() {
  localStorage.removeItem('historico');
  historico.innerHTML = '';
}
