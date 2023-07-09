// api POST new team with current user_id
const addTeam = async () => {
    event.stopPropagation();
    var response = await fetch("api/teams/", {
        method: "POST",
        body: null,
        headers: { "Content-Type": "application/json"}
    });
    if (!response.ok) {
        alert("error adding team");
    }
};

// api DELETE team request
const removeTeam = async (id) => {
    var response = await fetch(`api/teams/delete/${id}`, {
        method: "DELETE"
    }); 

    if (response.ok) {
        location.reload();
    } else {
        alert("error removing team");
    }
}

// adds event clicker for team button 
document
.querySelector("#create-button")
.addEventListener("click", addTeam);

// adds event clicker for all remove buttons 
removeButton = document.querySelectorAll(".remove");

for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", () => {removeTeam(removeButton[i].id)});
}