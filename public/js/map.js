// mapToken is coming from show.ejs
const apiKey = mapToken;

const map = new maplibregl.Map({
    container: "map",
    style: `https://maps.geoapify.com/v1/styles/osm-carto/style.json?apiKey=${apiKey}`,
    center: coordinates,
    zoom: 10,
});

map.addControl(new maplibregl.NavigationControl());

new maplibregl.Marker({
    color: "red",
})
.setLngLat(coordinates)
.setPopup(
    new maplibregl.Popup({ offset: 25 })
        .setHTML(`
            <h5>${listingTitle}</h5>
            <p>${listingLocation}</p>
            
            
        `)
)
.addTo(map);