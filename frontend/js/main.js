let classmateContainer = document.getElementById('classmateContainer');

function buildClassmate(classmate) {

  const classmateList = document.createElement('ul');
  const nameItem = document.createElement('li');
  const companyItem = document.createElement('li');
  const addressItem = document.createElement('li');

  nameItem.textContent = `${capitalize(classmate.firstName)} ${capitalize(classmate.lastName)}`;
  companyItem.textContent = classmate.company;
  addressItem.textContent = classmate.address;

  classmateList.appendChild(nameItem);
  classmateList.appendChild(companyItem);
  classmateList.appendChild(addressItem);

  classmateContainer.appendChild(classmateList);
}

const classmatesUrl = 'http://localhost:3000/classmates';

function fetchClassmates(url) {
  fetch(url)
  .then(response => { 
    return response.json();
  })
  .then(response => {
    listClassmates(response);
  })
  .catch(error => {
    console.log(error.message);
  });
}

function listClassmates(classmates) {
  classmates.forEach(classmate => {
    buildClassmate(classmate);
  });
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

fetchClassmates(classmatesUrl);



// classmate = {
//               id: "5b208cc71296939a6d4fcddc",
//               firstName: "gen",
//               lastName: "mauger",
//               company: "Code For Australia",
//               address: "4 Brunswick Pl, Melbourne VIC 3000",
//             }
