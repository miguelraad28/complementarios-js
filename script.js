// Constructor
class Producto{
    constructor(nombre, marca, precio, stock){
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
    }
}
function buscarProducto(productos){
    let nombreProducto = prompt("Ingrese un nombre de producto").toLowerCase()
    let productoBuscado = productos.find(producto => producto.nombre == nombreProducto)
    if(productoBuscado == undefined){
        console.log("Producto no encontrado")
    }else{
        console.log(productoBuscado)
    }
}
function buscarMarcas(productos){
    let marcaProducto = prompt("Ingrese la marca específica para filtrar.");
    const productosMarca = productos.filter(producto => producto.marca === marcaProducto)
    productosMarca.forEach(producto => {
    console.log(producto)
    })
}
function ordenarProductos(productos){
    let metodoOrdenamiento = parseInt(prompt(`Responda para:
    1 - Ordenar precio de menor a mayor
    2 - Ordenar precio de mayor a menor`))
    if(metodoOrdenamiento === 1){
        const precioMenorMayor = productos
        precioMenorMayor.sort((a,b) => a.precio-b.precio)
        precioMenorMayor.forEach(producto =>{
            console.log(producto)
        })
    }else if(metodoOrdenamiento === 2){
        const precioMayorMenor = productos
        precioMayorMenor.sort((a,b) => b.precio-a.precio)
        precioMayorMenor.forEach(producto =>{
            console.log(producto)
        })
    }
}
// Creación de objetos e inclusión en ARRAY
let continua = true
const productos = []
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
// Modos de filtración y busqueda
let respuesta
do {
    respuesta = parseInt(prompt(`Ingrese para:
    1 - Buscar un producto
    2 - Buscar productos por marca
    3 - Ordenar de menor a mayor
    `))
} while (respuesta <1 || respuesta >3);
switch(respuesta){
    case 1:
        buscarProducto(productos)
        break;
    case 2:
        buscarMarcas(productos)
        break;
    case 3:
        ordenarProductos(productos)
        break;
    default:
        alert("Opcion no valida")
        break;
}