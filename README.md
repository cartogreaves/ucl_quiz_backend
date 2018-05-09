# Question 'Creator' Web Application

All code within this repository acts as components for producing a fully functioning web application. The creation of a server using node.js is required for the functionality of question uploading and downloading within the application. Further information can be found **[here](https://github.com/RJHCarto/Server)**.

## How does the web application work?

The application works by presenting an interace with a draggable marker upon a map, coordinates are taken from the dragged marker and assigned to the form on the left hand side. The form on the left hand sign, contains MDL dynamic text fields for input of question, answer and correct answer information. Submission of question is made via the httpServer.js to the PostgreSQL database.

## User Interface Diagram
![alt text](https://github.com/RJHCarto/Questions/blob/master/ucesrh1/www/img/WebApp.PNG)

The interface above is designed for a quiz master or application administrator. The question form is shown on the left, while both download of current questions and upload of new question buttons are in the top right corner of the application.

### Workflow:
1. Move map marker to desired question location.
2. Input all question and answer fields on the left menu.
3. Choose which answer is correct using the dropdown list.
4. Upload question using 'Upload'.
5. Move map marker to different location.
6. Load current questions using 'Current Questions'.
7. Consider creating next question marker point.
