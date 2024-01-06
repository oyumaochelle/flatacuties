document.addEventListener("DOMContentLoaded", () => {
    const animalList = document.getElementById("animal-list");
    const animalDetails = document.getElementById("animal-details");

    fetch("http://localhost:3000/characters")
    .then(response => response.json())
    .then(data => {
        const characters = data.characters;
        characters.forEach(character =>{
            const nameElement = document.createElement("li");
            nameElement.textContent = character.name;
            animalList.appendChild(nameElement);
        })
    });
    // Handle clicking on a name to display details
    animalList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            const characterName = event.target.textContent;
            fetch(`http://localhost:3000/characters/${characterName}`)
            .then(response => response.json())
            .then(data => {
                const animalDetails = document.getElementById("animal-details");
                animalDetails.innerHTML = ""; // Clear any previous details
                const imageElement = document.createElement("img");
                imageElement.src = data.image;
                animalDetails.appendChild(imageElement);
              // Display name and votes
                const details = document.createElement("p");
                details.textContent = `Name: ${data.name} | Votes: ${data.votes}`;
                animalDetails.appendChild(details);
    
              // Add vote button
                const voteButton = document.createElement("button");
                voteButton.classList.add("vote-button");
                voteButton.textContent = "Vote for this cutie!";
                voteButton.addEventListener("click", () => {
                // Handle voting (implementation goes here)
                // ...
                });
                animalDetails.appendChild(voteButton);
            })
            .catch(error => {
                console.error("Error fetching character details:", error);
            });
        }
    });
});