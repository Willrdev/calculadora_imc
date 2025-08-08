var calcular = document.getElementById("calcular");

calcular.addEventListener("click", () => {

    // obter nome
    var nome = document.getElementById("nome").value;

    // obter altura 
    var altura = +document.getElementById("altura").value;

    // obter peso
    var peso = +document.getElementById("peso").value;

    // calcular imc
    var imc = peso / (altura * altura);

    var situacao = "";

    // verificar situação do IMC
    if (imc < 17)
        situacao = "Muito abaixo do peso";
    else if (imc >= 17 && imc < 18.49)
        situacao = "Abaixo do peso";
    else if (imc >= 18.5 && imc < 24.99)
        situacao = "Peso normal";
    else if (imc >= 25 && imc < 29.99)
        situacao = "Acima do peso";
    else if (imc >= 30 && imc < 34.99)
        situacao = "Obesidade I";
    else if (imc >= 35 && imc < 39.99)
        situacao = "Obesidade II (severa)";
    else if (imc >= 40)
        situacao = "Obesidade III (mórbida)";

    // exibir resultado
    var resultado = document.getElementById("resultado");

    resultado.style.display = "block";

    resultado.innerHTML = `<h2>${nome}, seu IMC é ${imc.toFixed(2)} e você está classificado como: ${situacao}</h2>`;
});
