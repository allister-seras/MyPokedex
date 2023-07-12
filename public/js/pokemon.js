// declares varriables 
const id = document.querySelector(".btn-primary").id;  
const textBox = document.querySelector(".pokemon1-name");

// will try to add pokemon to the selected team
const newFormHandler = async (event, id) => {

  // makes form not reset
  event.stopPropagation();
  event.preventDefault();

  const pokemonName = textBox.children[0].children[1].value;

  // handles api request
  if (pokemonName) {
    const response = await fetch(`/api/pokemon/`, {
      method: "POST",
      body: JSON.stringify({ pokemon: pokemonName}),
      headers: { "Content-Type": "application/json"}
    })
    .then(async (data) => {
      // if response is okay then it will add the new pokemon to a team
      if (data.ok) {
        let userId = document.querySelector(".btn-primary").id;  
        let pokeId = await data.json();

        // console.log(`pokemon id: ${pokeId.id} \nuser id: ${userId}`);
        addToTeam(pokeId.id, userId);

      // if there is an error than it will alert the user
      } else {
        alert("Failed to add pokemon");
      }
    });

  }
};

// will add a pokemon to a team based of both of their ids
const addToTeam = async(pokemonId, id) => {
  console.log(`pokemon id: ${pokemonId} \nuser id: ${id}`)
  // checks if we have the team id and the pokemon id
  if (id && pokemonId) {
    const response = await fetch(`/api/teams/${id}`, {
      method: "PUT",
      body: JSON.stringify({ pokemonNum: pokemonId }),
      headers: { "Content-Type": "application/json"}
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Could not add pokemon to team.");
    }
  }

}

// adds listener to form 
textBox.addEventListener("submit", (event) => {newFormHandler(event)});
