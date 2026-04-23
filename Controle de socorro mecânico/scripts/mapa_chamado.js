//Mapa eu ainda não sei utilizar não, coloquei com IA apenas para não ficar sem nada

document.addEventListener('DOMContentLoaded', function () {

    const mapa = L.map('mapa', {
        center: [-23.0268, -45.5558],
        zoom: 13,
        zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
    }).addTo(mapa);

    setTimeout(() => mapa.invalidateSize(), 200);

    const iconePersonalizado = L.divIcon({
        className: '',
        html: `<div style="
            background: #4ade7b;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 3px solid #fff;
            box-shadow: 0 0 8px #4ade7b;
        "></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
    });

    let marcador = null;

    mapa.on('click', async function (e) {
        const { lat, lng } = e.latlng;

        if (marcador) {
            marcador.setLatLng(e.latlng);
        } else {
            marcador = L.marker(e.latlng, { icon: iconePersonalizado }).addTo(mapa);
        }

        try {
            const resposta = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`,
                { headers: { 'Accept-Language': 'pt-BR' } }
            );
            const dados = await resposta.json();
            const end = dados.address;

            const inputs = document.querySelectorAll('.input_endereco input');
            if (inputs[0]) inputs[0].value = (end.road || end.pedestrian || end.highway || '');
            if (inputs[1]) inputs[1].value = (end.house_number || '');
            if (inputs[2]) inputs[2].value = (end.suburb || end.neighbourhood || end.quarter || '');
            if (inputs[3]) inputs[3].value = (end.city || end.town || end.village || '');
            if (inputs[4]) inputs[4].value = (end.postcode || '');
        } catch (erro) {
            console.warn('Não foi possível obter o endereço:', erro);
        }
    });

});