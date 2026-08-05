const calcularIVA = (precio, porcentaje) => precio * (porcentaje / 100);

const calcularTotal = (precio, iva) => precio + iva;


const calcular = (num1, num2, operacion) => {
    const resultado = operacion(num1, num2);
    console.log("El resultado es: $" + resultado);
    return resultado;
}


let precio = 500;
let porcentajeIVA = 16;


let iva = calcular(precio, porcentajeIVA, calcularIVA);

calcular(precio, iva, calcularTotal);