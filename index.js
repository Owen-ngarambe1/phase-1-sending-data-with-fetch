// Add your code here
function submitData(name, email){
    const configObjects = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    body: JSON.stringify({
    name: name,
    email: email,
    }),
    }},

  return fetch('http://localhost:3000/users', configObjects)
  .then(function (response) {
    return response.json();
  })
  .then(object => {console.log(object)
  const newId = data.id;
  const idElement = document.createElement('p');
  idElement.innerText = `New ID: ${newId}`;
  document.body.appendChild(idElement);
  return data;
  })
.catch(error => {
  console.error('Error:', error);
})
}