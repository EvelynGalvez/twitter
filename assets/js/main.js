const boton = document.getElementById('btn');
function contar ()  { 
  const max = 140;  
  let cadena = document.getElementById("comment").value; 
  let longitud = cadena.length;

  if(longitud <= max) { 
    document.getElementById("contador").value = max-longitud; 
  } else { 
    document.getElementById("comment").value = cadena.substr(0, max);
  } 
} 
boton.addEventListener('click', () => {
  //acá va el comentario ingresado por el usuario
  let comments = document.getElementById('comment').value;

  //limpiar el textarea
  document.getElementById('comment').value = '';

  //contenedor donde dejaré mis comentarios en html
  const cont = document.getElementById('cont');

  //crear un div contenedor para mostrar el texto ingresado
  const newComments = document.createElement('div')
  //validar que caja de texto contenga texto ingresado por el usuario
  if (comments.length == 0 || comments === null) {
    alert('No puedes ingresar un comentario vacío');
    return false;
  }
  
  /*function contar ()  { 
    const max = 140;  
    let longitud = comments.length;

        if(longitud <= max) { 
             document.getElementById('contador').value = max-longitud; 
        } else { 
             document.getElementById("comment").value = comments.substr(0, max);
        } 
  } */
  //crear variable que almacena el texto ingresado
  let textNewComment = document.createTextNode(comments);
  //crear contenedor <p> que almacenará el texto ingresado, dará estilo
  const contenedorElementos = document.createElement('p');
  //ligar padre e hijo
  contenedorElementos.appendChild(textNewComment);
  newComments.appendChild(contenedorElementos);
  cont.appendChild(newComments);
  
})