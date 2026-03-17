let numero = document.getElementById("numero").value;
let valor = Math.floor(Math.random()*10);
let aleatorio = Math.random();
if (parseInt(numero)==aleatorio){
    numero.style.setProperty("background-color", "green");
    window.alert("Parabéns, você acertou o número");
}
else if (parseInt(numero)>aleatorio){
    numero.style.setProperty("background-color", "red");
    window.alert("igite um número menor.")
}
else{
    numero.style.setProperty("background-color", "red");
    window.alert("Digite um número maior.")
}