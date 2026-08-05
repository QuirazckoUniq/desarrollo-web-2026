const persona = {nombre:'antonio', EDAD: 18}

delete persona.EDAD

console.log(persona)



const alumno = {
    nombre: "antonio",
    edad: 31,
    carrera: "sistemas",

    presentarse: function(){
        return `hola, soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera}`;
    }
};

console.log(alumno.presentarse());