let nombre, apellido, dni, ingresosMensuales, prestamoMaximo, sumaPagoMaximo, pagoMaximo, interesesTotales, pagoTotal, cuotasMinimas, cuotas, pagoCuota, respuesta, condicion1, condicion2
function funcionInteresesCuotas(cuotas, montoPrestamo) {
    let montoPrestamoDuplicado = montoPrestamo
    if(cuotas === 1 || cuotas < 6){
        interesesTotales = (montoPrestamo * 1.10) - montoPrestamoDuplicado;
    }else if(cuotas === 6 || cuotas < 9){
        interesesTotales = (montoPrestamo * 1.13) - montoPrestamoDuplicado;
    }else if(cuotas === 9 || cuotas < 12){
        interesesTotales = (montoPrestamo * 1.17) - montoPrestamoDuplicado;
    }else if(cuotas === 12 || cuotas < 19){
        interesesTotales = (montoPrestamo * 1.22) - montoPrestamoDuplicado;
    }else{
        interesesTotales = (montoPrestamo * 1.30) - montoPrestamoDuplicado;
    }
    return interesesTotales;
}
alert("Simulador de préstamo. Solicitud de hasta 4 veces tus ingresos y pago máximo mensual del 30%.");
nombre = prompt("Ingrese su nombre");
do {
    dni = parseInt(prompt("Ingrese su Nº de DNI"));
    ingresosMensuales = parseFloat(prompt("Ingrese sus ingresos mensuales"));
    if((dni < 1000000 || dni > 100000000) || isNaN(dni)){
        alert("Ingrese el DNI correctamente");
    }else{}
    if(isNaN(ingresosMensuales)){
        alert("Ingrese correctamente sus ingresos");
    }else if(ingresosMensuales < 40000){
        alert("Sus ingresos mensuales mínimos para acceder al prestamo deben superar los $40000 pesos");
    }else{
        prestamoMaximo = ingresosMensuales * 4;
        pagoMaximo = ingresosMensuales * 0.30;
    }
} while ((isNaN(dni) || isNaN(dni)) || ((dni < 1000000) || (dni > 100000000)) || ((isNaN(ingresosMensuales)) || (ingresosMensuales < 40000)));
do {
    montoPrestamo = parseFloat(prompt(`¿Qué cantidad desea solicitar? Su máximo es de $${prestamoMaximo}`));
    if(montoPrestamo > prestamoMaximo){
        alert(`Su préstamo no puede exceder ${prestamoMaximo}`);
        condicion1 = true
    }else{
        condicion1 = false
    }
    for(sumaPagoMaximo = pagoMaximo; sumaPagoMaximo <= montoPrestamo; sumaPagoMaximo += pagoMaximo){
        if(sumaPagoMaximo <= montoPrestamo){
            cuotasMinimas = sumaPagoMaximo / pagoMaximo
        }else{}
    }
} while (condicion1);
do {
    cuotas = parseInt(prompt(`¿En cuantas cuotas desea realizar el pago? Minimas de ${cuotasMinimas} y el máximo es de 24`));
    if(cuotas < cuotasMinimas){
        alert(`Las cuotas minimas son de ${cuotasMinimas}`);
    }else if(isNaN(cuotas)){
        alert("Por favor ingrese las cuotas en valor numérico");
    }else if(cuotas > 24){
        alert("El máximo de cuotas es de 24")
    }else{
        funcionInteresesCuotas(cuotas, montoPrestamo);
        pagoTotal = montoPrestamo + interesesTotales
        pagoCuota = pagoTotal / cuotas
        condicion2 = false;
    }
    alert(`${nombre}, su préstamo de $${montoPrestamo}, con intereses de $${interesesTotales}, le queda en un total de $${pagoTotal} en ${cuotas} cuotas de $${pagoCuota}`);
    respuesta = prompt("Si esta de acuerdo con el prestamo, ingrese si").toLowerCase();
    if(respuesta === "si"){
        alert("Perfecto, pronto se te depositará");
    }else{
        alert("Bueno, en otro momento");
    }
} while (condicion2);


