// Espera a que el contenido del DOM se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // L viene de la librería extenal Leafleet importada en mapa.html
    // Acá se inicializa el mapa y establece la vista inicial en el centro de Colombia con un nivel de zoom de 6
    var mapa = L.map('mapa').setView([4.5709, -74.2973], 6); // Longitud, latitud, zoom.

    // Agrega una capa de mosaicos llamdaos tiles de OpenStreetMap al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap Créditos para el Ejercicio Final. Gráfica Interactiva - UNAL  ' // Atribución para OpenStreetMap
    }).addTo(mapa);

    // Define las ubicaciones de los concesionarios de autos:
    var concesionarios = [
        { "marca": "BMW", "ubicacion": [4.7110, -74.0721], "informacion": "Concesionario BMW Colombia", "url": "https://www.bmw.com.co", "ciudad": "Bogotá" },
        { "marca": "Mercedes", "ubicacion": [4.6097, -74.0817], "informacion": "Concesionario Mercedes Colombia", "url": "https://www.mercedes-benz.com.co", "ciudad": "Bogotá" },
        { "marca": "Audi", "ubicacion": [6.2518, -75.5636], "informacion": "Concesionario Audi Colombia", "url": "https://www.audi.com.co", "ciudad": "Medellín" },
        { "marca": "Volkswagen", "ubicacion": [3.4516, -76.5319], "informacion": "Concesionario Volkswagen Colombia", "url": "https://www.volkswagen.com.co", "ciudad": "Cali" },
        { "marca": "Ford", "ubicacion": [10.9878, -74.7889], "informacion": "Concesionario Ford Colombia", "url": "https://www.ford.com.co", "ciudad": "Barranquilla" },
        { "marca": "Hyundai", "ubicacion": [7.1254, -73.1198], "informacion": "Concesionario Hyundai Colombia", "url": "https://www.hyundai.com.co", "ciudad": "Bucaramanga" }
    ];

    // Recorre objeto del diccionario concesionarios. A cada uno le asigna una ubicación en el mapa.
    // Usa popup para el punto en el mapa.
    concesionarios.forEach(function(concesionario) {
        // Agrega un marcador en la ubicación del concesionario
        L.marker(concesionario.ubicacion).addTo(mapa)
            // Agrega un popup con información del concesionario
            // Target blank hace que se abra una pestaña aparte
            .bindPopup('<b>' + concesionario.marca + '</b><br>' + concesionario.ciudad + '<br><a href="' + concesionario.url + '" target="_blank">' + concesionario.informacion + '</a>')
            // Abre el popup por defecto
            .openPopup();
    });
});
