var agenda= [
  {
    "nombre": "Emiliano Garcia",
    "numero": "54789612",
  },
  {
    "nombre": "Pepe Perez",
    "numero": "25478532",
  },
  {
    "nombre": "Israel Gonzalez",
    "numero": "56479852",
  },
  {
    "nombre": "Noehmi Blancas",
    "numero": "56982157",
  },
  {
    "nombre": "Camila Lopez",
    "numero": "53487914",
  },
  {
    "nombre": "Maximiliano Cortez",
    "numero": "58421765",
  },
];

var listaH=
'<div>'+
  '<li>__nombre__</li>'+
  '<p>__numero__</p>'+
'</div>';

var cargarPagina=function(){
 mostrar(agenda);
};

var mostrar=function(agenda){
 var vacio="";

 agenda.forEach(function(agregar){
   vacio+=listaH.replace("__nombre__", agregar.nombre)
   .replace("__numero__", agregar.numero);
 });
 $(".seccionLista").html(vacio);
};

$(document).ready(cargarPagina);
