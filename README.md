
# Flatacuties: Vote for the Cutest Animal!

## Overview

Welcome to Flatacuties, a web app where you can vote for your favorite adorable animals! This project involves building a frontend that fetches data from a local JSON server, allowing users to interact with the animal data and vote for their top picks.

## Learning Goals

Practice array iteration, DOM manipulation, event handling, and server communication.
Develop skills in planning and structuring a web application.
Implement core features and enhance them with additional functionalities.
## Getting Started

Prerequisites:

Node.js and npm (or yarn)
A code editor (e.g., VS Code, Atom)
Basic understanding of HTML, CSS, JavaScript, and JSON
Project Setup:

Clone this repository to your local machine.
Run npm install to install dependencies.
Start the JSON Server:

Run json-server --watch db.json to start the local server.
Test the server by visiting http://localhost:3000/characters in your browser.
Open the Project:

Open the index.html file in your code editor.
## Project Structure

index.html: Main HTML file for the frontend.
src/index.js: JavaScript file containing the application logic.
style.css: Stylesheet for customizing the app's appearance.
db.json: Data file for the local JSON server.
## Core Deliverables

Display a list of animal names: Fetch data from the /characters endpoint and display the names in a user-friendly format.
Show animal details: Upon clicking a name, display the corresponding image and vote count.
Allow voting: Enable users to increment the vote count for an animal and display the updated count.
## Additional Features (Optional):

Sorting by vote count: Allow sorting animals by popularity.
Filtering options: Provide filters to narrow down the list based on criteria.
Error handling: Implement graceful handling of potential errors (e.g., server issues, invalid data).
Persistence: Store votes persistently (e.g., using local storage or cookies).
## Contributions

We welcome contributions to this project! Please follow these guidelines:

Fork this repository.
Create a new branch for your changes.
Make your changes and commit them with descriptive messages.
Push your branch to your fork and submit a pull request.