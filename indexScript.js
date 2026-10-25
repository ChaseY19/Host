const listaImágenes = [
  //"Img/carita1.png",
  "Img/carita2.png",
  "Img/carita6.png",
  "Img/carita3.png",
  "Img/carita7.png",
  "Img/carita4.png",
  "Img/carita8.png",
  "Img/carita5.png",
  "Img/carita9.png"
];

const imagenElemento = document.getElementById("carita");
let indiceAnterior = -1; 

imagenElemento.addEventListener("pointerover", () => {
  let aleatorio;
  
  do {
    aleatorio = Math.floor(Math.random() * listaImágenes.length);
  } while (aleatorio === indiceAnterior && listaImágenes.length > 1);

  indiceAnterior = aleatorio;

  imagenElemento.src = listaImágenes[aleatorio];
});