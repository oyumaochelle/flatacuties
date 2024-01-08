let characters = [];
// fetcing the data from the db.json file
function fetchCharacters() {
    // Make a GET request to retrieve the list of animals
    fetch("http://localhost:3000/characters")
        .then(response => response.json())
        .then(data => {
            characters = data;
            displayCharacters(characters);
        })
}
// once the data is fetched, the following function will display the fetched data
function displayCharacters(characters) {
    const animalList = document.getElementById("character-list");
    animalList.innerHTML = ""; // Clearing the existing list
    characters.forEach(character => {
        const listItem = document.createElement("li");
        listItem.textContent = character.name;
        listItem.addEventListener("click", () => displayCharacterDetails(character.id)); //upon a click, an animal will be dispalyed
        animalList.appendChild(listItem);
    });
}
//the individual characters are displayed in reference to the id of the animal clicked
function displayCharacterDetails(characterId) {
    // Make a GET request to retrieve details for a specific animal
    fetch(`http://localhost:3000/characters/${characterId}`)
        .then(response => response.json())
        .then(character => {
            // Display details in the container
            const container = document.getElementById("character-details");
            container.innerHTML = `
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value="${character.name}">
                <label for="image_url">Image</label>
                <input type="text" id="image_url" name="image" value="${character.image}">
                <label for="votes">Votes</label>
                <input type="text" id="votes" name="votes" value="${character.votes}">
                <div id="btn">
                    <button type="button" onclick="voteForAnimal(${character.id})">Vote for the animal</button>
                </div>
            `;
        })
        .catch(error => console.error("Error fetching animal details:", error));
}

function voteForAnimal() {
    // Increment the votes for the selected animal
    const votesInput = document.getElementById("votes");
    const currentVotes = parseInt(votesInput.value);
    votesInput.value = currentVotes + 1;

    // You can send a request to update the votes on the server if needed
    // For simplicity, we are just updating the UI in this example
}

// Fetch characters on page load
fetchCharacters();
