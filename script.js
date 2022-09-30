fetch("./people.json")
  .then((result) => result.json())
  .then((output) => {
    output.map((item) => {
      richPeople.push(item);
    });
    render();
  })
  .catch((err) => console.error(err));

let richPeople = [];

console.log(richPeople);
const container = document.getElementById("container");

function render() {
  container.innerHTML = "";

  for (const person of richPeople) {
    container.innerHTML += ` <div class="card m-3" style="width: 18rem;" data-person-id="${person.name}">
  <img src="${person.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">${person.name}</h5>
    
  </div>
  <ul class="list-group list-group-flush text-center">
    <li class="list-group-item">${person.worth}</li>
    <li class="list-group-item">${person.source}</li>
  </ul>
</div>`;
  }
}
let deletedRichPeople = [];

function hideCard(e) {
  if (e.target !== container) {
    let personId = e.target.closest(".card").dataset.personId;

    deletedRichPeople = richPeople.filter((person) => {
      if (person.name == personId) {
        console.log(person);
        return person;
      }
    });
    richPeople = richPeople.filter((person) => person.name !== personId);
    console.log(richPeople);
    console.log(deletedRichPeople);
    console.log(e.target.closest("[data-person-id]").dataset.personId);
    console.log(personId);
  }
}
container.addEventListener("click", function () {
  hideCard(event);
  render();
});
