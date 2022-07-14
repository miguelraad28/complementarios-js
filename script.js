for(let producto of productos){
    misProductos.innerHTML += `
        <div class="div-producto">
        <div><img src="${producto.imagen}"></div>
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <p>${producto.stock}</p>
        </div>
    `
}