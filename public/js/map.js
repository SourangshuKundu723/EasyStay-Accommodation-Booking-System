const map = new mapboxgl.Map({
    accessToken: mapToken,
    container: 'map',
    style: 'mapbox://styles/mapbox/standard', // Use the standard style for the map
    projection: 'globe', // display the map as a globe
    zoom: 3, // initial zoom level, 0 is the world view, higher values zoom in
    center: coordinates // center the map on this longitude and latitude
});

map.addControl(new mapboxgl.NavigationControl());

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

map.addControl(new mapboxgl.FullscreenControl());

const popup = new mapboxgl.Popup({ offset: 25, draggable: true })
    .setHTML("<p>Exact location provided after booking</p>");

//Map marker
const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(coordinates)
    .setPopup(popup)
    .addTo(map);

map.flyTo({
    center: coordinates,
    zoom: 9,
    speed: 1.1,
    curve: 1.1,
    essential: true
});