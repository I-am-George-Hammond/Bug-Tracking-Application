const Projects = [
  {
    name: "Ndlovu Game Lodge reception app",
    details: "Developing new reception app using swift for iOS",
  },
  {
    name: "Mr.Browns backery Order page",
    details:
      "Order page needs to be redesigned to a modern and user friendly interface.",
  },
  {
    name: "FoodData Diet tracker app",
    details: "New mobile app for FoodData company",
  },
  {
    name: "Clash of Groups Mobile app ",
    details: "New era of game development compatible with mobile and pc",
  },
];

const list = document.getElementById("Projects");

createProjects();

function createProjects() {
  Projects.forEach((item) => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let p = document.createElement("p");
    p.classList.add("list-group-item-text");
    p.innerText = item.details;
    span.classList.add("badge");
    span.innerText = countBugs(item.name);
    li.innerText = item.name;
    li.classList.add("list-group-item");
    li.classList.add("list-group-item-heading");
    li.appendChild(span);
    list.appendChild(li).appendChild(p);
  });
}

function countBugs(value) {
  let count = 0;
  if (localStorage.getItem("tickets") != null) {
    let tickets = JSON.parse(localStorage.getItem("tickets"));
    tickets.forEach((element) => {
      let proj = JSON.parse(element);
      if (proj.project == value) {
        count++;
      }
    });
  }
  return count;
}
