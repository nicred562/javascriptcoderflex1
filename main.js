let continuar = true;


const mate = {
material : "cuero",
tamaño : "20x22",
industria : "argentina"
    
}

const termo = {
    marca : "stanley",
    capacidad : "1.5l",
    color : "verde"
}

const portaTermo ={
    material : "cuero",
    tamaño : "30x40",
    industria : "argentina"
}
while (continuar) {
    let pregunta = parseInt(prompt("Bienvenido! Desea ingresar a su carrito de compras  o la tienda ? (Ingrese 1 o 2)"));

    if (pregunta === 1) {
        console.log("Su carrito de compras está vacío.");

        continuar = false; 
    } else if (pregunta === 2) {
        console.log("Mostrando productos de la tienda:");
        console.log(mate);
        console.log(termo);
        console.log(portaTermo);

        continuar = false; 
    } else {
        alert("Opción no válida, por favor ingrese 1 o 2.");
    }
}
