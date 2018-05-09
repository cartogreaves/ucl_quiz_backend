    // create the code to get the questions data using an XMLHttpRequest
    function getQuestions() {
      client = new XMLHttpRequest();

    client.open('GET','http://developer.cege.ucl.ac.uk:30290/getGeoJSON/quizlet/geom');
      client.onreadystatechange = questionResponse; 
      // note don't use questionResponse() with brackets as that doesn't work
      client.send();
    }
    // create the code to wait for the response from the data server, and process the response once it is received
    function questionResponse() {
    // this function listens out for the server to say that the data is ready - i.e. has state 4
    if (client.readyState == 4) {
      // once the data is ready, process the data
      var questiondata = client.responseText;
      loadquestionlayer(questiondata);
      }
    }


 
    var app_array = [];
    // convert the received data - which is text - to JSON format and add it to the map
    function loadquestionlayer(questiondata) {
      // convert the text received from the server to JSON
      var questionjson = JSON.parse(questiondata);

      // load the geoJSON layer
      var questionlayer = L.geoJson(questionjson,
      {


        onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.question+'<div> <form id="Qform" style= "text-align:center" > <input type="radio" name="answer" id=check1 value="one" checked>'+feature.properties.answerone+ '<br> <input type="radio" name="answer" id=check2 value="two">'+feature.properties.answertwo+ '<br> <input type="radio" name="answer" id=check3 value="three">'+feature.properties.answerthree+ '<br> <input type="radio" name="answer" id=check4 value="four">' + feature.properties.answerfour +'<br></form></div>');

  }, 

        // use point to layer to create the points
        pointToLayer: function (feature, latlng)
        {
        quiz_marker = L.marker(latlng, {icon:testMarkerGray});
        app_array.push(quiz_marker);
        return quiz_marker
        
    },
  }).addTo(mymap);
mymap.fitBounds(questionlayer.getBounds()); 
} 

function startDataUpload() {
	var Question = document.getElementById("Question").value;
	var AnswerOne = document.getElementById("AnswerOne").value;
	var AnswerTwo = document.getElementById("AnswerTwo").value;
	var AnswerThree = document.getElementById("AnswerThree").value;
	var AnswerFour = document.getElementById("AnswerFour").value;
	var Correct = document.getElementById("Correct").value;
	var longitude = document.getElementById("longitude").value;
	var latitude = document.getElementById("latitude").value;
	var postString = "Question="+Question+"&AnswerOne="+AnswerOne+"&AnswerTwo="+AnswerTwo+"&AnswerThree="+AnswerThree+"&AnswerFour="+AnswerFour+"&Correct="+ Correct +"&latitude=" + latitude + "&longitude=" + longitude;
	processData(postString);
	alert ("Question Uploaded");
	location.reload();

}


var client;
function processData(postString) {
	client = new XMLHttpRequest();
	client.open('POST','http://developer.cege.ucl.ac.uk:30290/uploadData',true);
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
}

// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// change the DIV to show the response
document.getElementById("dataUploadResult").innerHTML = client.responseText;
}
}

