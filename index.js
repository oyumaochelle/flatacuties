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
                <img src="${character.image}" alt="${character.name}" id="image_url">
                <label for="votes">Votes</label>
                <input type="text" id="votes" name="votes" value="${character.votes}">
            `;
        })
        .catch(error => console.error("Error fetching animal details:", error));
}


function voteForAnimal() {
    const voteButton = document.getElementById("voteButton"); 
    if (voteButton.diabled){
        //diabling the vote button once voted
        console.log("It seems you have already voted for this animal.");
        return;
    }
    // Increment the votes for the selected animal
    const votesInput = document.getElementById("votes");
    const currentVotes = parseInt(votesInput.value);
    votesInput.value = currentVotes + 1;
    voteButton.disabled = true;
}

// Fetch characters on page load
fetchCharacters();
