const boton = document.getElementById('btn');
boton.addEventListener('click', () => {
  //acá va el comentario ingresado por el usuario
  let comments = document.getElementById('comment').value;

  //limpiar el textarea
  document.getElementById('comment').value = '';

  //contenedor donde dejaré mis comentarios en html
  const cont = document.getElementById('cont');
  
  //crear un div contenedor para mostrar el texto ingresado
  const newComments = document.createElement('div')
  //crear variable que almacena el texto ingresado
  let textNewComment = document.createTextNode(comments);
  //crear contenedor <p> que almacenará el texto ingresado, dará estilo
  const contenedorElementos = document.createElement('p');
  //ligar padre e hijo
  contenedorElementos.appendChild(textNewComment);
  newComments.appendChild(contenedorElementos);
  cont.appendChild(newComments);
})