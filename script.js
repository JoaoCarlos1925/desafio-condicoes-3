function calcularIMC() {
    const nome = document.getElementById("nome").value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / (altura * altura);
    let saudacao = sexo === "masculino" ? "Olá, Sr." : "Olá, Sra.";
    saudacao += ` ${nome}. Seu IMC é ${imc.toFixed(2)}.`;

    document.getElementById("resultado").innerText = saudacao;
}