const newFormHandler = async (event) => {
  event.preventDefault();

  const pokemonName = document.querySelector("#pokemon-name").value.trim();


  if (name && needed_funding && description) {
    const response = await fetch(`/api/pokemon`, {
      method: "POST",
      body: JSON.stringify({ name, needed}),
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/pokemon/${name}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/pokemon");
    } else {
      alert("Failed to delete pokemon");
    }
  }
};

document
  .querySelector(".pokemon1-name")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".team")
  .addEventListener("click", delButtonHandler);
