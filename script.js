//Nombre de tapas:
    //un array de productos(cada objeto con su nombre y precio) y un array vacio.
    const productos = [ 
    
        { nombre : "Floral", precio: 1000} ,
        { nombre : "Costelacion", precio: 800} ,
        { nombre : "Ciudad", precio: 1200} ,
        { nombre : "Bosque", precio: 1400} ,
        { nombre : "Comidas", precio: 600} ,
    ]


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
 /*     alert (todosLosProductos.join(" - "))
     }
   (seleccionar == "no" ) {
    alert ("gracias por visitarnos!")
    }
    

    //creo un bucle con while para que pueda elegir entre los productos
    //y una variable cantidad nueva para que ingrese numeros de cuadernos.
   while (seleccionar != "no")
  {
    let producto = prompt("Agrega un azafrán a tu carrito")
    let precio = 0 

    while (producto == "Floral" || producto == "Constelacion"||producto == "Bosque"|| producto == "Ciudad"|| producto == "Comidas")
    switch(producto) {
      case "Floral": precio = 1000;
      break;
      case "Constelacion": precio = 800;
      break;
      case "Bosque": precio = 1200;
      break;
      case "Ciudad": precio = 1400;
      break;
      case "Comidas": precio = 600;
      break;
      default:
        break;
    }

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