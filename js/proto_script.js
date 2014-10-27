//var map;
//function initialize() {
//    var mapOptions = {
//        zoom: 4,
//        center: new google.maps.LatLng(52.318, -98.603)
//    };
//    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//}
//google.maps.event.addDomListener(window, 'load', initialize);


// If you're adding a number of markers, you may want to
// drop them on the map consecutively rather than all at once.
// This example shows how to use setTimeout() to space
// your markers' animation.

var cdn_center = new google.maps.LatLng(51.318, -94.603);
var neighborhoods = [
  new google.maps.LatLng(52.511467, -113.5),
  new google.maps.LatLng(49.327, -123.067),
  //new google.maps.LatLng(53.278, -110),
  new google.maps.LatLng(52.268, -113.811 ),
  new google.maps.LatLng(53.6303, -113.625),
  new google.maps.LatLng(50.45, -104.60 ),
  new google.maps.LatLng(43.68, -79.76 ),
  //new google.maps.LatLng(45.42, -75.69 ),
  //new google.maps.LatLng(, ),
  //new google.maps.LatLng(, ),
  //new google.maps.LatLng(, ),
  //new google.maps.LatLng(, ),
  //new google.maps.LatLng(, ),
  //new google.maps.LatLng(, ),
  //new google.maps.LatLng(, ),
  //new google.maps.LatLng(, ),
];

var markers = [];
var iterator = 0;
var map;

function drop() {
  for (var i = 0; i < neighborhoods.length; i++) {
    setTimeout(function() {
      addMarker();
    }, i * 500);
  }
}

function initialize() {
  var mapOptions = {
    zoom: 4,
    center: cdn_center
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        drop();
    });
}

var icon = {
    url: "./images/pin-red-solid-5.png",
    size: new google.maps.Size(27, 48),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 48)
};

function addMarker() {
  pin = './img/truck.png';
  markers.push(new google.maps.Marker({
    position: neighborhoods[iterator],
    map: map,
    draggable: false,
    icon: icon,
    animation: google.maps.Animation.DROP
  }));
  iterator++;
}

google.maps.event.addDomListener(window, 'load', initialize);
