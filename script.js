//////////////// DO WHILE //////////////////////

let numero1, numero2, operacion

do{
    numero1 = parseFloat(prompt("Ingrese un numero"));
    numero2 = parseFloat(prompt("Ingrese otro numero"));
    operacion = prompt("Ingrese que operacion quiere realizar. (+, -, *, /)")
}
while(isNaN(numero1) || isNaN(numero2))
switch(operacion){
    case "+":
        alert(numero1 + numero2);
        break;
    case "-":
        alert(numero1 - numero2);
        break;
    case "*":
        alert(numero1 * numero2);
        break;
    case "/":
        alert(numero1 / numero2);
        break;
    default:
        alert("Operacion no valida");
        break;
}