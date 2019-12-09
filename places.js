
window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: 'MI CASA',
           location: {
               lat: -2.029292,
               lng: -79.910325,
           }
       },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/duck.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '1.5 1.5 1.5');

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}