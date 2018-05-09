    var northstar = L.tileLayer('https://api.mapbox.com/styles/v1/rjhargreaves/cjcv3d22i04bp2rpza7tjx1c4/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmpoYXJncmVhdmVzIiwiYSI6ImNpa3JmbDJiazAwMDF3Y20xMHoyaXowdDAifQ.78vWSemMDwn42TwMuxfODw', {maxZoom: 18,attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' 
      + 
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    
    }),

    scenic   = L.tileLayer('https://api.mapbox.com/styles/v1/rjhargreaves/cjgxxe0ra003t2rnrkjvu8ofs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmpoYXJncmVhdmVzIiwiYSI6ImNpa3JmbDJiazAwMDF3Y20xMHoyaXowdDAifQ.78vWSemMDwn42TwMuxfODw', {maxZoom: 18,attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' 
      + 
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    
    });
  // load the map
    var mymap = L.map('mapid',{
      center: [51.524428, -0.134224], 
      zoom: 13,
      layers: [scenic, northstar]
    });

    var baseMaps = {
      "Scenic": scenic,
      "Plain": northstar
    };
    // load the tiles
    L.control.layers(baseMaps).addTo(mymap);

var testMarkerGray = L.AwesomeMarkers.icon({
      icon: 'play',
      markerColor: 'lightgray'
    });

var marker = L.marker([51.524428, -0.134224], {
    draggable:true
});

marker.addTo(mymap);

marker.on('dragend', function (e) {
  document.getElementById('latitude').value = marker.getLatLng().lat;
  document.getElementById('longitude').value = marker.getLatLng().lng;
});

