var apiURL = 'https://corona.lmao.ninja/v3/covid-19/countries';

var initCoords = {
    lat: 0,
    lng: 0
};

var properties = {
    center: initCoords,
    zoom: 2
};

function iniciaMapa() {

    fetch('paises.json')
        .then(function (response) {
            response.json().then(function (data) {
                const map = new google.maps.Map(document.getElementById('mapa'), properties);

                data.forEach(marcador => {
                    fetch(apiURL)
                        .then(function (response) {

                            response.json().then(function (dataCountries) {

                                dataCountries.forEach(registro => {

                                    var informacion = "<strong>PAÍS: </strong>" + registro.country + ", <strong>CASOS: </strong> " + registro.cases;

                                    var infoWindow = new google.maps.InfoWindow({
                                        content: informacion
                                    });

                                    if (registro.country == marcador.CountryName) {
                                        let marker = new google.maps.Marker({
                                            map: map,
                                            position: new google.maps.LatLng(marcador.CapitalLatitude, marcador.CapitalLongitude),
                                            title: marcador.CountryName + registro.cases
                                        })

                                        marker.addListener('click', function () {
                                            infoWindow.open(map, marker);
                                        })
                                    }
                                })
                            })
                        })
                })
            });
        })
        .catch(function (error) {
            console.log('Ocurrió un error', error);
        })
}