let numero1, numero2, acumulador, nombre

nombre = prompt("Bienvenido, cómo te llamas?");
alert("Con este pequeño ciclo, sabrás la suma de todos los numeros de un rango.");
do{
    numero1 = parseFloat(prompt("Primer número del rango a sumar:"));
    numero2 = parseFloat(prompt("Último número del rango a sumar:"));
    if(isNaN(numero1) || isNaN(numero2)){
        alert("Necesito que indiques valores numéricos.");
    }
    else{
    }
}
while(isNaN(numero1) || (isNaN(numero2))){
    acumulador = 0
    for(numero1 = numero1; numero1 <= numero2; numero1++){
    acumulador += numero1;
    }
    alert(`${nombre}, la suma del rango de numeros es igual a ${acumulador}`);
}