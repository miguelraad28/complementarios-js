// VARIABLES A USAR
let nombre, nota1, nota2, nota3, respuesta, promedio
// FUNCION FLECHA
const promediar = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;
// SOLICITUD DE NOMBRE DE ALUMNO
nombre = prompt("Hola estudiante, ¿Cuál es tu nombre?")
// SOLICITUD DE NOTAS
do {
    nota1 = parseInt(prompt("Escriba la primera nota"));
    nota2 = parseInt(prompt("Escriba la segunda nota"));
    nota3 = parseInt(prompt("Escriba la tercera nota"));
    if((isNaN(nota1)) || (isNaN(nota2) || isNaN(nota3))){
        alert("Escriba notas válidas.");
    }
} while ((isNaN(nota1)) || (isNaN(nota2) || isNaN(nota3))){
    respuesta = prompt("¿Desea promediar sus notas?").toLowerCase();
    if(respuesta === "si"){
        // MENSAJE + LLAMADO DE LA FUNCIÓN
        alert(`${nombre}, el promedio de tus notas es ` + promediar(nota1, nota2, nota3))
    }
}