// This is a JavaScript file
window.onload = function(){
  const display = document.querySelector("#display");

  const numerico = document.querySelectorAll(".numerico");

  let valor;
  let valor1;
  let op;

  let botoes = Array.prototype.filter.call(numerico, function(botao){
    botao.addEventListener('click',function(){
      valor = display.value;
      valor += this.value;
      display.value = valor;
      });
  });

  document.querySelector("#sub").addEventListener('click', function(){
    valor1 = display.value;
    display.value= "";
    op = "sub";
  });

  document.querySelector("#mult").addEventListener('click', function(){
    valor1 = display.value;
    display.value= "";
    op = "mult";
  });

  document.querySelector("#div").addEventListener('click', function(){
    valor1 = display.value;
    display.value= "";
    op = "div";
  });

  document.querySelector("#soma").addEventListener('click', function(){
    valor1 = display.value;
    display.value= "";
    op = "soma";
  });

  document.querySelector("#igual").addEventListener('click', function(){
    let valor2 = display.value;

    if(op == 'sub'){
      let resultado = valor1 - valor2;
      display.value = resultado.toFixed(2);
      
    }

    if(op == 'mult'){
      let resultado = valor1 * valor2;
      display.value = resultado.toFixed(2);
    }

    if(op == 'div'){
      let resultado = valor1 / valor2;
      display.value = resultado.toFixed(2);
    }

    if(op == 'soma'){
      let resultado = parseFloat(valor1) + parseFloat(valor2);
      display.value = resultado.toFixed(2);
    }
  });

  document.querySelector("#c").addEventListener('click', function(){
    display.value = "";
    valor1 = "";
    op = "";
  });

}