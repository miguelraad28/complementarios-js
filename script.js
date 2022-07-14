class Producto {
    constructor(id, nombre, precio, stock, categoria, imagen){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.categoria = categoria
        this.imagen = imagen
    }
}
const producto1 = new Producto(1, "Oráculo conexión con el universo", 2850, 22, "mazos", "images/productos/cartas/universosolo.jpg")
const producto2 = new Producto(2, "Oráculo conexión con el universo", 2850, 22, "mazos")
const producto3 = new Producto(3, "BOX - Oráculo conexión con el universo", 3950, 9, "mazos")
const producto4 = new Producto(4, "Oráculo tecito para el alma", 2450, 5, "mazos")
const producto5 = new Producto(5, "Oráculo Angelical", 3220, 35, "mazos")
const producto6 = new Producto(6, "Consulta de tarot 50min", 4990, 10000, "servicio")
const producto7 = new Producto(7, "Kit Limpieza 7 Chakras", 2590, 15, "limpieza")
const producto8 = new Producto(8, "Spry Abundancia y Fortuna", 650, 12, "limpieza")
const producto9 = new Producto(9, "Spry Limpieza Energética", 550, 15, "limpieza")
const producto10 = new Producto(10, "Spry Ruda y Romero", 750, 20, "limpieza")
const producto11 = new Producto(11, "Vela de soja de la Abundancia", 950, 9, "velas")
const producto12 = new Producto(12, "Vela de soja para el Amor", 1050, 15, "velas")
const producto13 = new Producto(13, 'Vela de soja "Buda"', 820, 2, "velas")
const producto14 = new Producto(14, "Vela de soja de Limpieza", 920, 5, "velas")
const producto15 = new Producto(15, "Vela de soja de Seducción", 1200, 6, "velas")
const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15]

let misProductosIndex = document.getElementById("div-padre-productos");

for(let producto of productos){
    misProductosIndex.innerHTML += `
    <div class="div-producto>
    <div><img src="${producto.imagen}"></div>
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <p>¡Quedan ${producto.stock} disponibles!</p>
    </div>
    `
}