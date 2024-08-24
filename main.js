let continuar = true;
let carrito = [];


const productos = {
    mate: { material: "cuero", tamaño: "20x22", industria: "argentina", precio: 500 },
    termo: { marca: "stanley", capacidad: "1.5l", color: "verde", precio: 3000 },
    portaTermo: { material: "cuero", tamaño: "30x40", industria: "argentina", precio: 1500 }
};


function agregarAlCarrito(producto, cantidad) {
    carrito.push({ producto, cantidad });
    alert(`${cantidad} ${producto} se ha añadido al carrito.`);
}


function mostrarCarrito() {
    if (carrito.length === 0) {
        console.log("Su carrito de compras está vacío.");
    } else {
        console.log("Contenido del carrito:");
        carrito.forEach(item => {
            console.log(`${item.cantidad} x ${item.producto} - ${productos[item.producto].precio} cada uno`);
        });
        console.log(`Total de la compra: $${calcularTotal()}`);
    }
}


function calcularTotal() {
    let total = 0;
    carrito.forEach(item => {
        total += productos[item.producto].precio * item.cantidad;
    });
    return total;
}


while (continuar) {
    let pregunta = parseInt(prompt("Bienvenido! ¿Desea ingresar a su carrito de compras o a la tienda? (Ingrese 1 para carrito, 2 para tienda, 0 para salir)"));

    if (pregunta === 1) {
        mostrarCarrito();
    } else if (pregunta === 2) {
        let producto = prompt("¿Qué producto desea añadir al carrito? (mate, termo, portaTermo)");
        if (productos[producto]) {
            let cantidad = parseInt(prompt(`¿Cuántas unidades de ${producto} desea añadir?`));
            agregarAlCarrito(producto, cantidad);
        } else {
            alert("Producto no válido, por favor elija entre mate, termo o portaTermo.");
        }
    } else if (pregunta === 0) {
        continuar = false;
        alert("Gracias por visitar nuestra tienda!");
    } else {
        alert("Opción no válida, por favor ingrese 1, 2 o 0.");
    }
}
