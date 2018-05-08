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

