    //Defining a list of basemaps from mapbox studio api: 
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

    satellite   = L.tileLayer('https://api.mapbox.com/styles/v1/rjhargreaves/cjgxztl85007j2ro5urdguxcg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmpoYXJncmVhdmVzIiwiYSI6ImNpa3JmbDJiazAwMDF3Y20xMHoyaXowdDAifQ.78vWSemMDwn42TwMuxfODw', {maxZoom: 18,attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' 
      + 
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    
    });

    // Define mymap variable, with centre, zoom level and layers.
    var mymap = L.map('mapid',{
      center: [51.524428, -0.134224], 
      zoom: 13,
      layers: [satellite, scenic, northstar]
    });
    
    // Define baseMaps variable, for display within the layers navigation pane.
    var baseMaps = {
      "satellite": satellite,
      "Scenic": scenic,
      "Plain": northstar
    };
    
    // Load map layers and serve to mymap.
    L.control.layers(baseMaps).addTo(mymap);

// Define Grey marker from the Awesome Markers Library.
var testMarkerGray = L.AwesomeMarkers.icon({
      icon: 'play',
      markerColor: 'lightgray'
    });

// Define Draggable marker used to gain question location information (Longitude and Latitude)
var marker = L.marker([51.524428, -0.134224], {
    draggable:true
});

marker.addTo(mymap);

//Function for processing marker location values into the text field within the question form.
marker.on('dragend', function (e) {
  document.getElementById('latitude').value = marker.getLatLng().lat;
  document.getElementById('longitude').value = marker.getLatLng().lng;
});

