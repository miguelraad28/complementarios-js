function funcionInteresesCuotas(cuotas, montoPrestamo){
    switch(cuotas){
        case (cuotas == 1) || (cuotas < 6):
            pagoTotal = montoPrestamo * 1.10;
            break;
        case (cuotas == 6) || (cuotas < 9):
            pagoTotal = montoPrestamo * 1.13;
            break;
        case (cuotas == 9) || (cuotas < 12):
            pagoTotal = montoPrestamo * 1.16;
            break;
        case (cuotas == 12) || (cuotas < 16):
            pagoTotal = montoPrestamo * 1.20;
            break;
        case (cuotas == 16) || (cuotas < 19):
            pagoTotal = montoPrestamo * 1.24;
            break;
        case (cuotas == 19) || (cuotas < 25):
            pagoTotal = montoPrestamo * 1.30;
            break;
    }
    return pagoTotal
}
let nombre, dni, ingresosMensuales, montoPrestamo, prestamoMaximo, pagoMaximo, cuotas, cuotasMinimas, sumaPagoMaximo, pagoCuotas, pagoTotal, respuestaFinal, booleanFinal
alert("Simulador de prestamo según ingresos mensuales. Podrás solicitar un préstamo 4 veces mayor a tus ingresos mensuales con una cuota máxima mensual del 35% de tus ingresos.")
do {
    nombre = prompt("Ingrese su nombre y apellido");
    dni = parseInt(prompt("Ingrese su Nº de DNI"));
    ingresosMensuales = parseFloat(prompt("Ingrese sus ingresos mensuales"));
    if((dni < 1000000 || dni > 100000000) || isNaN(dni)){
        alert("Ingrese el DNI correctamente");
    }
    if(isNaN(ingresosMensuales)){
        alert("Ingrese correctamente sus ingresos");
    }else{
        prestamoMaximo = ingresosMensuales * 4;
        pagoMaximo = ingresosMensuales * 0.35;
    }
} while ((isNaN(dni) || isNaN(dni)) || ((dni < 1000000) || (dni > 100000000)) || (isNaN(ingresosMensuales)));
do {
    montoPrestamo = parseFloat(prompt(`¿Qué cantidad desea solicitar? Su máximo es de $${prestamoMaximo}.`));
    for(sumaPagoMaximo = pagoMaximo; sumaPagoMaximo <= montoPrestamo; sumaPagoMaximo += pagoMaximo){
        if(sumaPagoMaximo <= montoPrestamo){
            cuotasMinimas = sumaPagoMaximo / pagoMaximo
        }else{}
    }
    cuotas = parseInt(prompt(`Para pagar su préstamo, deberá ser en un mínimo de ${cuotasMinimas} cuotas o más. ¿En cuantas cuotas desea realizar el pago?`));
    if(cuotas < cuotasMinimas){
        alert(`Sr/a, le repetimos que el minimo de cuotas debe ser de ${cuotasMinimas}.`);
    }else if(isNaN(cuotas)){
        alert("Ingrese las cuotas correctamente en valor numérico.");
    }else{
        pagoCuotas = montoPrestamo / cuotas;
        funcionInteresesCuotas(cuotas, montoPrestamo);
        respuestaFinal = prompt(`Sr/a, su préstamo tendrá un monto total a pagar de $${pagoTotal}, en un numero de ${cuotas} cuotas. Serían pagos mensuales de $${pagoCuotas}. Si acepta el préstamo por favor escriba SI`).toLowerCase();
        if(respuestaFinal == "si"){
            alert("Su prestamo ha sido aprobado.")
            booleanFinal = false;
        }else if(respuesta == "no"){
            alert("Bueno, en otra oportunidad")
        }else{
            alert("Lo siento no comprendi la respuesta.")
        }
    }
} while (booleanFinal);