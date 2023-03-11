//Populating names options
const Users = JSON.parse(sessionStorage.getItem("users"));

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

popUsers();
popProjects();

function popUsers() {
  const select = document.getElementById("uName");
  Users.forEach((element) => {
    const newOption = document.createElement("option");
    let el = JSON.parse(element);
    let opText = document.createTextNode(el.name);
    newOption.appendChild(opText);
    newOption.setAttribute("value", "Option Value");
    select.appendChild(newOption);
  });
}

function popProjects() {
  const select = document.getElementById("Proj");
  Projects.forEach((element) => {
    const newOption = document.createElement("option");
    let opText = document.createTextNode(element.name);
    newOption.appendChild(opText);
    newOption.setAttribute("value", "Option Value");
    select.appendChild(newOption);
  });
}

let SubmitValid = (elemID) => {
  let errors = false;
  let elem = document.getElementById(elemID);
  console.log(elem);
  let elemValue = elem.value;
  if (elemValue === "") {
    errors = true;
    alert("Please fill in all required fields");
  } else {
  }
  // print/store
  console.log(elemValue);
  console.log(errors);
};

let store = () => {
  let Rating = document.getElementById("bugR").value;
  let Crash = document.getElementById("crash").value;
  let userName = document.getElementById("uName")
  let bugProj = document.getElementById("Proj")
  let avatar = "https://bootdey.com/img/Content/avatar/avatar3.png";

  if (localStorage.getItem("tickets") == null) {
    //checks local storage
    localStorage.setItem("tickets", "[]");
  }
  let tickets = JSON.parse(localStorage.getItem("tickets"));//array declaration
  console.log(tickets);

  let ticket = {
    user: userName.options[userName.selectedIndex].text,
    project: bugProj.options[bugProj.selectedIndex].text,
    date: document.getElementById("Date").value,
    level: DetermineBugLevel(Rating, Crash),
    descript: document.getElementById("Descript").value,
    avatar: avatar,
    completion: 0,
  };

 Users.forEach((element) => {//gets user avatar from users array
    let users = JSON.parse(element);
    if (users.name == ticket.user) {
      ticket.avatar = users.avatar;
    }
  });

  console.log(tickets);
  tickets.push(JSON.stringify(ticket));
  

  localStorage.setItem("tickets", JSON.stringify(tickets));
};

//Determination of bug level
function DetermineBugLevel(Rating, Crash) {
  let level;
  if (document.getElementById('Y').checked) {
    level = "Critical";
  } else if (Rating <= 5) {
    level = "low";
  } else if (Rating >= 6 && Rating < 8) {
    level = "Intermediate";
  } else if (Rating >= 8 && Rating < 10) {
    level = "Medium";
  } else if (Rating == 10) {
    level = "High";
  }
  return level;
}

//test

//console.log(DetermineBugLevel(Rating, Crash));
