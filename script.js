//Nombre de tapas:
    //un array de productos(cada objeto con su nombre y precio) y un array vacio.
    class Productos{
        constructor(nombre, precio, cantidad = 0){
            this.nombre = nombre
            this.precio = precio
            this.cantidad = cantidad
        }
        añadirCantidad(cantidadAComprar){
            if(this.cantidad > 0){
                this.cantidad += cantidadAComprar
            }else if(this.cantidad == 0){
                this.cantidad = cantidadAComprar
            }
        }
    }
    const producto1 = new Productos("floral", 1000)
    const producto2 = new Productos("constelación", 800)
    const producto3 = new Productos("ciudad", 1200)
    const producto4 = new Productos("bosque", 1400)
    const producto5 = new Productos("comidas", 600)

    const productos = [producto1, producto2, producto3, producto4, producto5]
    const productosAMostrar = productos.map(producto => producto ={nombre: producto.nombre, precio: producto.precio})
    const carrito = []
    let respuesta
    
    do {
        respuesta = prompt("Responda si o no ¿Quiere comprar un azafran?").toLowerCase()
            if(respuesta == "si"){
                    alert("Te muestro mis productos por consola!")
                    productosAMostrar.forEach(producto => {
                    console.log(producto)
                })
            }else if(respuesta =="no"){
                alert("En otra ocasión")
            }else{
                alert("Disculpa, no entendí tu respuesta.")
            }
        }
    while (respuesta != "si")
    let respuestaProducto
    let respuestaAñadirMas
    let cantidadAComprar
    do{
    respuestaProducto = prompt("que producto quiere añadir?").toLowerCase()
        switch(respuestaProducto) {
        case "floral":
            if(carrito.some(producto => producto = (producto.nombre == "floral"))){
                cantidadAComprar = parseInt(prompt("Cuantos más desea comprar?"))
                productos[0].añadirCantidad(cantidadAComprar)
            }else{
                carrito.push(productos[0])
                cantidadAComprar = parseInt(prompt("Cuantos desea comprar?"))
                productos[0].añadirCantidad(cantidadAComprar)
            }
            break;
        case "constelacion":
            if(carrito.some(producto => producto = (producto.nombre == "constelacion"))){
                cantidadAComprar = parseInt(prompt("Cuantos más desea comprar?"))
                productos[1].añadirCantidad(cantidadAComprar)
            }else{
                carrito.push(productos[1])
                cantidadAComprar = parseInt(prompt("Cuantos desea comprar?"))
                productos[1].añadirCantidad(cantidadAComprar)
            }
            break;
        case "bosque":
            if(carrito.some(producto => producto = (producto.nombre == "bosque"))){
                cantidadAComprar = parseInt(prompt("Cuantos más desea comprar?"))
                productos[2].añadirCantidad(cantidadAComprar)
            }else{
                carrito.push(productos[2])
                cantidadAComprar = parseInt(prompt("Cuantos desea comprar?"))
                productos[2].añadirCantidad(cantidadAComprar)
            }
            break;
        case "ciudad":
            if(carrito.some(producto => producto = (producto.nombre == "ciudad"))){
                cantidadAComprar = parseInt(prompt("Cuantos más desea comprar?"))
                productos[3].añadirCantidad(cantidadAComprar)
            }else{
                carrito.push(productos[3])
                cantidadAComprar = parseInt(prompt("Cuantos desea comprar?"))
                productos[3].añadirCantidad(cantidadAComprar)
            }
            break;
        case "comidas":
            if(carrito.some(producto => producto = (producto.nombre == "comidas"))){
                cantidadAComprar = parseInt(prompt("Cuantos más desea comprar?"))
                productos[4].añadirCantidad(cantidadAComprar)
            }else{
                carrito.push(productos[4])
                cantidadAComprar = parseInt(prompt("Cuantos desea comprar?"))
                productos[4].añadirCantidad(cantidadAComprar)
            }
            break;
        default:
            break;
        }

        respuestaAñadirMas = prompt("Desea añadir otro producto?")
    }while(respuestaAñadirMas !="no")
console.log(carrito)