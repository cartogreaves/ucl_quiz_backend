# Question 'Creator' Web Application

All code within this repository acts as components for producing a fully functioning web application. The creation of a server using node.js is required for the functionality of question uploading and downloading within the application. Further information can be found **[here](https://github.com/RJHCarto/Server)**.

## How does the web application work?

The application works by presenting an interace with a draggable marker upon a map, coordinates are taken from the dragged marker and assigned to the form on the left hand side. The form on the left hand sign, contains MDL dynamic text fields for input of question, answer and correct answer information. Submission of question is made via the httpServer.js to the PostgreSQL database.

## Annotated diagram
![alt text](https://github.com/RJHCarto/Questions/blob/master/ucesrh1/www/img/WebApp.PNG)
