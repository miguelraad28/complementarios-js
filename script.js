// Constructor
class Producto{
    constructor(nombre, tipo, marca, precio, stock, sku){
    this.nombre = nombre;
    this.tipo = tipo;
    this.marca = marca;
    this.precio = precio;
    this.stock = stock;
    this.sku = sku;
    }
}
// Objetos
const producto1 = new Producto("Oráculo conexión con el universo","mazos","Infusa",2890,70,1)
const producto2 = new Producto("Oráculo un tecito para el alma","mazos","Infusa",2420,50,2)
const producto3 = new Producto("Oráculo angelical","mazos","Infusa",3250,35,3)
const producto4 = new Producto("Confeti de cuarzos","piedras","Infusa",2500,12,4)
const producto5 = new Producto("Confeti de cuarzos especial","piedras","Infusa",2900,8,5)
const producto6 = new Producto("Kit 7 Chakras","limpieza energetica","Infusa",2200,20,6)
const producto7 = new Producto("Ejemploº7","limpieza energetica","Infusa",500,22,7)
const producto8 = new Producto("Ejemploº8","piedras","Infusa",900,15,8)
const producto9 = new Producto("Ejemploº9","mazos","Infusa",1900,45,9)
// Array de objetos
const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]
//Funcion de orden de precio
function ordenarPrecio(productos){
    consulta = parseInt(prompt("Si quieres te puedo ordenar de menor a mayor o viceversa. Ingrese 1 para ordenar de menor a mayor, 2 para ordenar de mayor a menor"))
    if(consulta === 1){
        const precioMenorMayor = productos
        precioMenorMayor.sort((a,b) => a.precio-b.precio)
        precioMenorMayor.forEach(producto =>{
            console.log(producto)
        })
    }else if(consulta === 2){
        const precioMayorMenor = productos
        precioMayorMenor.sort((a,b) => b.precio-a.precio)
        precioMayorMenor.forEach(producto =>{
            console.log(producto)
        })
    }
}
// Filtro por tipo de producto
let consulta = prompt("Desea filtrar por mazos, piedras o limpieza energetica? Escriba su respuesta").toLowerCase()
if(consulta === "mazos"){
    const productosMazos = productos.filter(producto => producto.tipo === "mazos")
    productosMazos.forEach(producto => {
    console.log(producto)
})
}else if(consulta === "piedras"){
    const productosPiedras = productos.filter(producto => producto.tipo === "piedras")
    productosPiedras.forEach(producto => {
    console.log(producto)
})
}else if(consulta === "limpieza energetica" || consulta === "limpieza"){
    const productosLimpieza = productos.filter(producto => producto.tipo === "limpieza energetica")
    productosLimpieza.forEach(producto => {
        console.log(producto)
    })
}else{
    alert("No entendí tu filtración. Te ofrezco otro tipo de ordenamiento.")
    ordenarPrecio(productos)
}