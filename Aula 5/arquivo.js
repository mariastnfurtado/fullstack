window.alert("Oi gente, tudo bem?"); //ele "trava" o site porque é um alerta
console.log("Dado escondido"); //o dado está no console (pode ser usado para armazenar pontuação de jogo)

let entrada = prompt("Entre com a sua idade:")
console.log("Sua idade é:")
console.log(entrada)

entrada = parseInt(entrada);
if(entrada===9){
    window.alert("Você tem 9 anos");
}
else if(entrada>9){
    window.alert("Você tem mais de 9 anos");
}
else{
    window.alert("Você tem menos de 9 anos");
}