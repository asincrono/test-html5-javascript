var list = document.querySelector('#lista');
var listItem = document.createElement('li');
listItem.innerHTML = 'Contenido';
lista.appendChild(listItem);

//--------------------------------------------------
var listaTareas = [new Tarea('a'), new Tarea('b')];
var listaTareasSer = JSON.stringify(listaTareas);
localStorage.setItem('tareas', listaTareasSer);

//--------------------------------------------------
var listaTareasSer = localStorage.getItem('tareas');
var listaTareas = JSON.parse(listaTareasSer);
listaTareas.push(nuevaTarea);
var listaTareasSer = JSON.stringify(listaTareas);
localStorage.setItem('tareas', listaTareasSer);
