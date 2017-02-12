import { getExampleEntities, deleteExampleEntity } from './api/exampleApi';

getExampleEntities().then(result => {
  let exampleBody = "";

  result.forEach(example => {
    exampleBody += `<tr>
    <td><a href="#" data-id="${example.id}" class='deleteEntity'>Delete</a></td>
    <td>${example.id}</td>
    <td>${example.email}</td>
    </tr>`;
  });

  global.document.getElementById('exampleEntities').innerHTML = exampleBody;

  // Of course use React or Angular instead of vanilla JS, just showing concepts.
  const deleteLinks = global.document.getElementsByClassName('deleteEntity');

  Array.from(deleteLinks, link => {
    link.onclick = function(event){
      const element = event.target;
      event.preventDefault();
      deleteExampleEntity(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });
});
