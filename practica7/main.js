var paises = document.querySelector('#paises');

fetch('data.json')
.then( function(response){
    response.json()
    .then (function(data){
            data.forEach(registro => {

                let nombre = document.createElement('p');
                nombre.textContent = 'PAÍS: ' + registro.country + ' - CASOS: ' + registro.cases;
                paises.appendChild(nombre);
            });
        });
});