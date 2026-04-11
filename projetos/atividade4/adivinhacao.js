const valor = Math.floor(Math.random() * 100);
function adivinhacao() {
    let numero = document.getElementById("numero").value;
    if (parseInt(numero) == valor) {
        document.body.style.backgroundColor = "rgb(125, 232, 125)";
        window.alert("Parabéns, você acertou o número");
    }
    else if (parseInt(numero) > valor) {
        document.body.style.backgroundColor = "rgb(188, 44, 44)";
        window.alert("Digite um número menor.");
    }
    else {
        document.body.style.backgroundColor = "rgb(188, 44, 44)";
        window.alert("Digite um número maior.")
    }
}