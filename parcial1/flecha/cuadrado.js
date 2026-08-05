const cuadrado = (numero) => numero * numero;


const calcular = (num, operacion) => {
    const resultado = operacion(num);
    console.log("El resultado es: " + resultado);
    return resultado;
}


let numero = 5;

calcular(numero, cuadrado);