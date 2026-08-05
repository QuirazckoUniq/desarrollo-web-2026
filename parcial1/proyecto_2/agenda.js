let contactos=[];

const formulario=document.getElementById("formContacto");

const tabla=document.getElementById("tabla");

const mensaje=document.getElementById("mensaje");

const total=document.getElementById("total");

const buscar=document.getElementById("buscar");

const filtroCiudad=document.getElementById("filtroCiudad");

const ordenar=document.getElementById("ordenar");

formulario.addEventListener("submit",guardarContacto);

buscar.addEventListener("keyup",buscarNombre);

filtroCiudad.addEventListener("change",filtrarCiudad);

ordenar.addEventListener("click",ordenarAZ);

function guardarContacto(e){

e.preventDefault();

let indice=document.getElementById("indice").value;

let nombre=document.getElementById("nombre").value.trim();

let telefono=document.getElementById("telefono").value.trim();

let correo=document.getElementById("correo").value.trim();

let ciudad=document.getElementById("ciudad").value;

if(nombre==""||telefono==""||correo==""||ciudad==""){

mensaje.textContent="Favor de Llenar Todos los campos";

return;

}

mensaje.textContent="";

let contacto={

nombre,
telefono,
correo,
ciudad

};

if(indice==""){

contactos.push(contacto);

}else{

contactos[indice]=contacto;

document.getElementById("indice").value="";

}

formulario.reset();

mostrar(contactos);

}

function mostrar(lista){

tabla.innerHTML="";

lista.map((contacto,Index)=>{

tabla.innerHTML+=`

<tr>

<td>${contacto.nombre}</td>

<td>${contacto.telefono}</td>

<td>${contacto.correo}</td>

<td>${contacto.ciudad}</td>

<td>

<button onclick="editar('${contacto.nombre}')">Editar</button>

<button onclick="eliminar('${contacto.nombre}')">Eliminar</button>

</td>

</tr>

`;

});

total.innerHTML="Total de contactos: "+lista.length;

}

function editar(nombre){

let contacto=contactos.find(c=>c.nombre===nombre);

let indice=contactos.findIndex(c=>c.nombre===nombre);

document.getElementById("indice").value=indice;

document.getElementById("nombre").value=contacto.nombre;

document.getElementById("telefono").value=contacto.telefono;

document.getElementById("correo").value=contacto.correo;

document.getElementById("ciudad").value=contacto.ciudad;

}

function eliminar(nombre){

let indice=contactos.findIndex(c=>c.nombre===nombre);

contactos.splice(indice,1);

mostrar(contactos);

}

function buscarNombre(){

let texto=buscar.value.toLowerCase();

let resultado=contactos.filter(contacto=>

contacto.nombre.toLowerCase().includes(texto)

);

mostrar(resultado);

}

function filtrarCiudad(){

let ciudad=filtroCiudad.value;

if(ciudad==""){

mostrar(contactos);

return;

}

let resultado=contactos.filter(contacto=>contacto.ciudad===ciudad);

mostrar(resultado);

}

function ordenarAZ(){

contactos.sort((a,b)=>

a.nombre.localeCompare(b.nombre)

);

mostrar(contactos);

}