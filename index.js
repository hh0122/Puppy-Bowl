//grab "Show Player" button
//fetch the url
const main = document.querySelector(`main`)
const ol = document.querySelector(`ol`);
const getAllPuppy = async () => {
  try {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/teams/`);
  const result = await response.json();
  // console.log(result)
  //access to the data of the object
  const teams = result.data.teams;
  // console.log(teams)
  //access to team
    // console.log(teams[0].players)
    // console.log(teams[1].players)
  // go through the team array
    for( let i = 0; i<teams.length; i++){
      const teamLI = document.createElement(`li`);
      teamLI.innerHTML = `
      <h3> Team: ${teams[i].name} </h3>
      <p> ID: ${teams[i].id} </p>
      <p> Created At: ${teams[i].createdAt} </p>
      <p> Cohort ID: ${teams[i].cohortId} </p>
      <p>Players: <button data-team="${teams[i].name}">See more players in ${teams[i].name} team</button></p>
      `
    // grab ol
    // make li appear in ol
    ol.append(teamLI);
    main.replaceChildren(ol);
  }

  // grab button See More
  const button = document.querySelectorAll(`button`);
  //grab each single button
  button.forEach((button)=>{
    button.addEventListener(`click`,(event)=>{ // create a click event
      const teamName = event.target.dataset.team;
        // console.log(teamName);
        if(teamName === `Ruff`){
          // console.log(`Ruff`) //check if access in correct team
         
  
  // console.log(teams[0].players)
const team0 = teams[0].players;
// console.log(team0)
// console.log(team0[1])
for ( let j = 0; j<team0.length; j++){
  const roster = document.createElement(`ol`);
  roster.innerHTML = `
  <div>
  <h2>Name: ${team0[j].name}</h2>
  <p>ID: ${team0[j].id}</p>
  <p>Breed: ${team0[j].breed}</p>
  <p>Status: ${team0[j].status}</p>
  <img src="${team0[j].imageUrl}" alt="${team0[j].name} Picture" height="150px" width="150px">

  <div>
  `;
  
  main.append(roster);
  ol.remove();
  }
  const div = document.createElement(`div`);
  div.innerHTML =`
  <button> Back To Team
  `
  main.append(div);
  const backButton = document.querySelector(`button`)
  backButton.addEventListener(`click`, (event) => {
    // console.log(`clicked`)
    main.replaceChildren(ol);
  })
        }else{
          // console.log(teams[0].players)
const team0 = teams[1].players;
// console.log(team0)
// console.log(team0[1])
for ( let j = 0; j<team0.length; j++){
  const roster = document.createElement(`ol`);
  roster.innerHTML = `
  <div>
  <h2>Name: ${team0[j].name}</h2>
  <p>ID: ${team0[j].id}</p>
  <p>Breed: ${team0[j].breed}</p>
  <p>Status: ${team0[j].status}</p>
  <img src="${team0[j].imageUrl}" alt="${team0[j].name} Picture" height="150px" width="150px">

  <div>
  `;
  
  main.append(roster);
  ol.remove();
  }
  const div = document.createElement(`div`);
  div.innerHTML =`
  <button> Back To Team
  `
  main.append(div);
  const backButton = document.querySelector(`button`)
  backButton.addEventListener(`click`, (event) => {
    // console.log(`clicked`)
    main.replaceChildren(ol);
  })
       

        }
    });
  });
  
const functionLoopArray = ()=>{
  
}

} catch (err){
  console.log(err);
}
}
getAllPuppy();