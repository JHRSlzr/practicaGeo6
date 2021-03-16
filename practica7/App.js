var paises = document.querySelector('#paises');

fetch('data.json')
.then( function(response){
    response.json()
    .then (function(data){
            data.forEach(registro => {

                let nombre = document.createElement('p');
                nombre.textContent =                 "<strong>PAÍS: </strong>" + registro.country + " <strong>CASOS: </strong>" + registro.cases;
                paises.appendChild(nombre);
            });
        });
});