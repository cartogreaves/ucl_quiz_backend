    // XMLHttpRequest to pull current question information from the database.
    function getQuestions() {
      client = new XMLHttpRequest();

    client.open('GET','http://developer.cege.ucl.ac.uk:30290/getGeoJSON/quizlet/geom');
      client.onreadystatechange = questionResponse; 
      client.send();
    }
    function questionResponse() {
    if (client.readyState == 4) {
      var questiondata = client.responseText;
      loadquestionlayer(questiondata);
      }
    }


    //Array used for proximity analysis.
    var app_array = [];
    //JSON Conversion
    function loadquestionlayer(questiondata) {
      var questionjson = JSON.parse(questiondata);

      var questionlayer = L.geoJson(questionjson,
      {

        //Function that holds each markers question and answers, withouy a submission option. View Only for this application. All appears inside leaflet popup.
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

//Question data upload functions which are reponsible for parsing information to the database.
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
	// Alert to tell user question is being uploaded.
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

function dataUploaded() {
if (client.readyState == 4) {
document.getElementById("dataUploadResult").innerHTML = client.responseText;
}
}

