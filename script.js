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
const producto1 = new Producto(1, "Oráculo conexión con el universo", 2850, 22, "mazos", "./images/productos/cartas/universosolo.jpg")
const producto2 = new Producto(2, "BOX - Oráculo conexión con el universo", 3950, 9, "mazos", "./images/productos/cartas/universobox.jpg")
const producto3 = new Producto(3, "Oráculo tecito para el alma", 2450, 5, "mazos", "./images/productos/cartas/universosolo.jpg")
const producto4 = new Producto(4, "Oráculo Angelical", 3220, 35, "mazos", "./images/productos/cartas/universosolo.jpg")
const producto5 = new Producto(5, "Consulta de tarot 50min", 4990, 10000, "servicio", "./images/productos/tarot.jpg")
const producto6 = new Producto(6, "Kit Limpieza 7 Chakras", 2590, 15, "limpieza", "./images/productos/limpieza/chakras.jpg")
const producto7 = new Producto(7, "Spry Abundancia y Fortuna", 650, 12, "limpieza", "./images/productos/limpieza/abundanciayfortuna.jpg")
const producto8 = new Producto(8, "Spry Limpieza Energética", 550, 15, "limpieza", "./images/productos/limpieza/limpieza.jpg")
const producto9 = new Producto(9, "Spry Ruda y Romero", 750, 20, "limpieza", "./images/productos/limpieza/rudayromero.jpg")
const producto10 = new Producto(10, "Vela de soja de la Abundancia", 950, 9, "velas", "./images/productos/velas/abundancia.jpg")
const producto11 = new Producto(11, "Vela de soja para el Amor", 1050, 15, "velas", "./images/productos/velas/amor.jpg")
const producto12 = new Producto(12, 'Vela de soja "Buda"', 820, 2, "velas", "./images/productos/velas/buda.jpg")
const producto13 = new Producto(13, "Vela de soja de Limpieza", 920, 5, "velas", "./images/productos/velas/limpieza.jpg")
const producto14 = new Producto(14, "Vela de soja de Seducción", 1200, 6, "velas", "./images/productos/velas/seduccion.jpg")
const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14]

let misProductosIndex = document.getElementById("div-padre-productos");

for(let producto of productos){
    misProductosIndex.innerHTML += `
    <div class="div-producto">
    <div><img src="${producto.imagen}"></div>
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <p>¡Quedan ${producto.stock} disponibles!</p>
    </div>
    `
}