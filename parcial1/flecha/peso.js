const pesoADolar = (pesos, tipoCambio) => pesos / tipoCambio;

const calcular = (cantidad, cambio, operacion) => {
    const resultado = operacion(cantidad, cambio);
    console.log("El resultado es: $" + resultado.toFixed(2) + " dólares");
    return resultado;
}

let pesos = 500;
let tipoCambio = 18;

calcular(pesos, tipoCambio, pesoADolar);