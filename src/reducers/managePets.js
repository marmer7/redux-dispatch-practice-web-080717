export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      let pets = state.pets.slice(0);
      pets.push(action.pet);
      return { pets };
    case "REMOVE_PET":
      pets = state.pets.filter(pet => pet.id !== action.id);
      return { pets };
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  let container = document.getElementById("container");
  let petsList = state.pets
    .map(pet => {
      return `<li>${pet.name}</li>`;
    })
    .join(" ");
  container.innerHTML = `<ul>${petsList}</ul>`;
}
