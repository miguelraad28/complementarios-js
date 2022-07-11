// Constructor
class Producto{
    constructor(nombre = "Predeterminado", marca = "Predeterminado", precio = 1, stock = 1){
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
    }
}
const productos = []
let continua = true
do {
    let nombre, marca, precio, stock
    do {
        nombre = prompt("Ingrese un nombre de producto").toLowerCase();
        marca = prompt("Ingrese marca de producto").toLowerCase();
    } while (nombre.length == 0 || marca.length == 0);
    do{
        precio = parseFloat(prompt("Ingrese un precio de producto"));
        stock = parseInt(prompt("Ingrese stock de producto"));
    }while((isNaN(precio) || isNaN(stock)) || (precio <= 0 || stock <= 0));
    const producto = new Producto(nombre, marca, precio, stock);
    productos.push(producto);
    continua = prompt ("¿Desea ingresar mas productos?").toLowerCase();
} while (continua != "no");
console.log(productos)