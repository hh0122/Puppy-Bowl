// Grab "Show Player" button, main, and ordered list (ol) elements
const main = document.querySelector("main");
const ol = document.querySelector("ol");

// Fetch the teams and display them
const getAllPuppy = async () => {
  try {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/teams/");
    const result = await response.json();
    const teams = result.data.teams;

    // Populate teams list
    teams.forEach(team => {
      const teamLI = document.createElement("li");
      teamLI.innerHTML = `
        <h3>Team: ${team.name}</h3>
        <p>ID: ${team.id}</p>
        <p>Created At: ${team.createdAt}</p>
        <p>Cohort ID: ${team.cohortId}</p>
        <p>Players: <button data-team="${team.name}">See more players in ${team.name} team</button></p>
      `;
      ol.append(teamLI);
    });
    main.replaceChildren(ol);

    // Add event listeners to each "See more players" button
    document.querySelectorAll("button[data-team]").forEach(button => {
      button.addEventListener("click", event => showTeamPlayers(event, teams));
    });
  } catch (err) {
    console.log("Error fetching teams:", err);
  }
};

// Display players of the selected team
const showTeamPlayers = (event, teams) => {
  const teamName = event.target.dataset.team;
  const selectedTeam = teams.find(team => team.name === teamName);

  if (selectedTeam && selectedTeam.players.length > 0) {
    // Remove team list and display players
    ol.remove();

    // Create roster list for players
    const roster = document.createElement("ol");
    selectedTeam.players.forEach(player => {
      const playerDiv = document.createElement("div");
      playerDiv.classList.add("div");
      playerDiv.innerHTML = `
        <h2>Name: ${player.name}</h2>
        <p>ID: ${player.id}</p>
        <p>Breed: ${player.breed}</p>
        <p>Status: ${player.status}</p>
        <img src="${player.imageUrl}" alt="${player.name} Picture" height="150px" width="150px">
      `;
      roster.append(playerDiv);
    });
    main.append(roster);

    // Add "Back To Team" button
    const backButton = document.createElement("button");
    backButton.textContent = "Back To Team";
    backButton.addEventListener("click", () => main.replaceChildren(ol));
    main.append(backButton);
  } else {
    console.log(`No players found for team: ${teamName}`);
  }
};

// Execute function to fetch and display teams
getAllPuppy();
