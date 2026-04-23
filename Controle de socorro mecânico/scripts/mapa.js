//Mapa eu ainda não sei utilizar não, coloquei com IA apenas para não ficar sem nada

var mapa = L.map('mapa').setView([-23.0068, -45.5480], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(mapa);

// Ícones personalizados
var iconeUrgente = L.divIcon({
    className: '',
    html: '<div style="background:#f25c54; width:14px; height:14px; border-radius:50%; border:2px solid white; box-shadow: 0 0 6px rgba(242,92,84,0.8);"></div>'
});

var iconeNormal = L.divIcon({
    className: '',
    html: '<div style="background:#5b9cf6; width:14px; height:14px; border-radius:50%; border:2px solid white; box-shadow: 0 0 6px rgba(91,156,246,0.8);"></div>'
});

var iconeAguardando = L.divIcon({
    className: '',
    html: '<div style="background:#f5c842; width:14px; height:14px; border-radius:50%; border:2px solid white; box-shadow: 0 0 6px rgba(245,200,66,0.8);"></div>'
});

var iconeCaminhao = L.divIcon({
    className: '',
    html: '<div style="background:#1a8a36; color:white; padding:4px 8px; border-radius:6px; font-size:11px; font-weight:600; border:1px solid #4ade7b; white-space:nowrap;">🚛 CAM-205</div>'
});

// Marcadores de chamados
L.marker([-23.0020, -45.5600], { icon: iconeUrgente })
    .addTo(mapa)
    .bindPopup('<b style="color:#f25c54;">URGENTE</b><br>CAM-205<br>Pneu furado na rodovia<br>Av. Castelo Branco, 1000');

L.marker([-23.0150, -45.5300], { icon: iconeNormal })
    .addTo(mapa)
    .bindPopup('<b style="color:#5b9cf6;">NORMAL</b><br>CAM-288<br>Problema na bateria<br>Rua dos Cometas, 50');

L.marker([-23.0200, -45.5100], { icon: iconeAguardando })
    .addTo(mapa)
    .bindPopup('<b style="color:#f5c842;">AGUARDANDO</b><br>SUP-512<br>Superaquecimento do motor<br>Rod. Pres. Dutra, KM 120');

// Marcadores dos caminhões
L.marker([-23.0080, -45.5500], { icon: iconeCaminhao })
    .addTo(mapa)
    .bindPopup('CAM-205 · Em deslocamento');

L.marker([-23.0180, -45.5200], { icon: L.divIcon({
    className: '',
    html: '<div style="background:#1a8a36; color:white; padding:4px 8px; border-radius:6px; font-size:11px; font-weight:600; border:1px solid #4ade7b; white-space:nowrap;">🚛 CAM-288</div>'
})}).addTo(mapa)
    .bindPopup('CAM-288 · Em deslocamento');