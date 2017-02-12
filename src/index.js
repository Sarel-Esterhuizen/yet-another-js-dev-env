import { getExampleEntities } from './api/exampleApi';

getExampleEntities().then(result => {
  let exampleBody = "";

  result.forEach(example => {
    exampleBody += `<tr>
    <td>${example.email}</td>
    </tr>`;
  });

  global.document.getElementById('exampleEntities').innerHTML = exampleBody;
});
