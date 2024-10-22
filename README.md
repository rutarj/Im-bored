![image](https://github.com/user-attachments/assets/bc08b20b-4f01-45fe-805c-11d931f4d936)


Project Overview
This project is a web application called "I'm Bored." It helps users find activities to do when they have free time. The app can suggest random activities or filter them based on user preferences like type of activity and number of participants.

Key Components
HTML Structure:

HTML is used to create the layout of the webpage. The main parts are:
A title: "Let's find something for you to do ✌️"
A form where users can select an activity type (like education or relaxation) and the number of participants (like 1 person or 4 people).
A section to display the suggested activities or any error messages.
Express Server:

Express is a web framework for Node.js that helps create server-side applications.
The server listens on port 3000, which is where our app runs.
Handling Requests:

GET Request: When you first visit the app:
The server fetches a random activity from the Bored API (a website that provides fun activity suggestions).
The activity is displayed on the page.
POST Request: When a user submits the form:
The server gets the selected activity type and number of participants.
It then requests filtered activities from the Bored API based on those selections.
The server picks one random activity from the filtered list and displays it.
Error Handling:

If there’s a problem fetching data from the API (like no matching activities), the app will show an error message instead.
