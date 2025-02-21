function inserirValor(value) {
  let inserido = document.getElementById('display').value += value;

  // Atualizar o valor atual no localStorage
  localStorage.setItem('valorDisplay', inserido);
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

  let expressaoNum = document.getElementById('expressaoNum');
  if(resultado.value != ''){
    expressaoNum.innerHTML = localStorage.getItem('valorDisplay') + " =";
  }
}

// Exibe todo o histórico do localStorage
function exibirHistorico() {
  let historicoSalvo = localStorage.getItem('historico');
  
  // Exibir o histórico na lista
  let listaExp = document.getElementById('listaExp');
  listaExp.innerHTML = ''; // Limpa o conteúdo atual
  
  if (historicoSalvo) {
    let historicoArray = historicoSalvo.split('<br>'); // Divide os cálculos salvos
    historicoArray.forEach(calculo => {
      let li = document.createElement('li');
      li.textContent = calculo; // Adiciona o texto de cada cálculo
      listaExp.appendChild(li);
    });
  } else {
    let li = document.createElement('li');
    li.textContent = 'Nenhum histórico disponível';
    listaExp.appendChild(li);
  }

  // Recebe os históricos salvos e armazena na lista de expressões
  //listaExp.innerHTML = historicoSalvo;


  // Lixeira para apagar o histórico, só aparece ao clicar no icon-historico
  let iconLimpar = document.querySelector('.icon-limpar');
  iconLimpar.style.display = 'flex';
}

// Limpa o resultado do display
function limparResultado() {
  display.value = '';
  expressaoNum.innerHTML = '';
}

// Limpa o histórico do localStorage
function limparHistorico() {
  let listaExp = document.getElementById('listaExp');
  listaExp.innerHTML = ''
  localStorage.removeItem('historico');

  // Lixeira para apagar o histórico, some ao clicar
  let iconLimpar = document.querySelector('.icon-limpar');
  iconLimpar.style.display = 'none';
}
