ll = new tt.LngLat(-122.4149, 37.7736);
var map = tt.map({
		key: 'w1dnVx3TJ0Aq3QAfsnVCowI7sKoCWdwQ',
		container: 'map',
		style: 'tomtom://vector/1/basic-main',
		dragPan: !isMobileOrTablet(),
		zoom: 10,
		center: ll
});
map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());
map.boxZoom.enable()
map.addControl(new tt.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true 


}));
// -------------------markers
var marker1 = new tt.Marker()
.setLngLat([-122.4149, 37.7736])
.addTo(map)



 new tt.Marker()
.setLngLat([-122.4021, 37.7201])
.addTo(map);

// ------- popups set up 

var markerHeight = 50, markerRadius = 10, linearOffset = 25;
var popupOffsets = {
 'top': [0, 0],
  'top-left': [0,0],
  'top-right': [0,0],
  'bottom': [0, -markerHeight],
  'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  'left': [markerRadius, (markerHeight - markerRadius) * -1],
  'right': [-markerRadius, (markerHeight - markerRadius) * -1]
  };
 var popup = new tt.Popup({offset: popupOffsets, className: 'my-class'})
 .setHTML("<h1>Free Food </h1>")


marker1.setPopup(popup)
// ----- button input 

var button = document.getElementById('add-item')
var offer = document.getElementById('offer')

button.addEventListener("click" , function(){
	var marker =  new tt.Marker()
.setLngLat([-122.4221, 37.7501])
.addTo(map);
marker.setPopup(popup.setHTML(offer.value))
})