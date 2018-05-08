// load the map
var mymap = L.map('mapid').setView([51.524428, -0.134224], 17);
				// load the tiles
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 18,
			attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' 
			+ 
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'mapbox.streets'
		}).addTo(mymap);

var marker = L.marker([51.524428, -0.134224], {
    draggable:true
});

marker.addTo(mymap);

marker.on('dragend', function (e) {
  document.getElementById('latitude').value = marker.getLatLng().lat;
  document.getElementById('longitude').value = marker.getLatLng().lng;
});

