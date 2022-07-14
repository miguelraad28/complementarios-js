//Nombre de tapas:
    //un array de productos(cada objeto con su nombre y precio) y un array vacio.
    class Producto{
        constructor(nombre, precio){
            this.nombre = nombre
            this.precio = precio
        }
    }
    const producto1 = new Producto("Floral", 1000)
    const producto2 = new Producto("Constelación", 800)
    const producto3 = new Producto("Ciudad", 1200)
    const producto4 = new Producto("Bosque", 1400)
    const producto5 = new Producto("Comidas", 600)

    const productos = [producto1, producto2, producto3, producto4, producto5]
    let carrito = []
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
   switch(true) {
    case "Floral": carrito.push(productos[0]);
    break;
    case "Constelacion": carrito.push;
    break;
    case "Bosque": carrito.push;
    break;
    case "Ciudad": carrito.push;
    break;
    case "Comidas": carrito.push;
    break;
    default:
      break;
  }
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