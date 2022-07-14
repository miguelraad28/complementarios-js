//Nombre de tapas:
    //un array de productos(cada objeto con su nombre y precio) y un array vacio.
    class Producto{
        constructor(nombre, precio){
            this.nombre = nombre
            this.precio = precio
        }
    }
    class ProductoEnCarrito{
        constructor(nombre, precio, cantidad){
            this.nombre = nombre
            this.precio = precio
            this.cantidad = cantidad
        }
        añadirProducto(sumarCantidad){
        this.cantidad = sumarCantidad
        }
    }
    const producto1 = new Producto("Floral", 1000)
    const producto2 = new Producto("Constelación", 800)
    const producto3 = new Producto("Ciudad", 1200)
    const producto4 = new Producto("Bosque", 1400)
    const producto5 = new Producto("Comidas", 600)

    const productos = [producto1, producto2, producto3, producto4, producto5]
    const carrito = []
    let respuesta
    
   do {
       respuesta = prompt("Responda si o no ¿Quiere comprar un azafran?").toLowerCase()
        if(respuesta == "si"){
            alert("Te muestro mis productos por consola!")
            productos.forEach(producto => {
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
    case "floral": const productoEnCarrito1 = new ProductoEnCarrito("Floral", 1000, 0)
    carrito.push(productoEnCarrito1)
    cantidadAComprar = prompt("Cuantos queres comprar?")
    productoEnCarrito1.añadirProducto(cantidadAComprar)
    break;
    case "constelacion": const productoEnCarrito2 = new ProductoEnCarrito("Constelacion", 800, 0)
    carrito.push(productoEnCarrito2)
    cantidadAComprar = prompt("Cuantos queres comprar?")
    productoEnCarrito2.añadirProducto(cantidadAComprar)
    break;
    case "bosque": const productoEnCarrito3 = new ProductoEnCarrito("Ciudad", 1200, 0)
    carrito.push(productoEnCarrito3)
    cantidadAComprar = prompt("Cuantos queres comprar?")
    productoEnCarrito3.añadirProducto(cantidadAComprar)
    break;
    case "ciudad": const productoEnCarrito4 = new ProductoEnCarrito("Bosque", 1400, 0)
    carrito.push(productoEnCarrito4)
    cantidadAComprar = prompt("Cuantos queres comprar?")
    productoEnCarrito4.añadirProducto(cantidadAComprar)
    break;
    case "comidas": const productoEnCarrito5 = new ProductoEnCarrito("Comidas", 600, 0)
    carrito.push(productoEnCarrito5)
    cantidadAComprar = prompt("Cuantos queres comprar?")
    productoEnCarrito5.añadirProducto(cantidadAComprar)
    break;
    default:
      break;
  }

  respuestaAñadirMas = prompt("Desea añadir otro producto?")
    }while(respuestaAñadirMas !="no")
  console.log(carrito)
/*
   while (seleccionar != "no")
  {
    let producto = prompt("Agrega un azafrán a tu carrito")
    let precio = 0 

    while (producto == "Floral" || producto == "Constelacion"||producto == "Bosque"|| producto == "Ciudad"|| producto == "Comidas")


    let cantidad = parseInt(prompt("¿cuantos azafranes deseas?"))

carrito.push ({producto,precio}) //las llaves son para que me queden en forma de objeto.
console.log(carrito)

}
else

let producto
 if (producto != "Floral" || producto != "Constelacion"||producto != "Bosque"|| producto !="Ciudad"|| producto != "Comidas") { {
    alert( "Por favor seleccione un producto en stock");
  }

  seleccionar = prompt ("¿Quiere agregar algo mas al carrito?")

  while (seleccionar === "no") { 
  alert("Gracias por tu compra")
  //muestro lo que compra:
  carrito.forEach((carritocuenta) => {
    console.log (carritocuenta.cantidad * carritocuenta.precio);
  })
  break;
 }


}
  */