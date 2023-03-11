//Group members
//Willem Engelbrecht-578334
//George Hammond-
//Ruan Ludick-577142
//Henko Meyer- 578420

const users = [
  //array of user objects
  {
    id: 1,
    name: "Mike Tango",
    role: "Senior",
    email: "mike@tango.com",
    dateHired: "2013/08/08",
    status: "Inactive",
    popOver: "I like to squash bugs.",
    avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
  },
  {
    id: 2,
    name: "Piet Pompies",
    role: "Intermediate",
    email: "piet@pompies",
    dateHired: "2013/08/12",
    status: "Active",
    popOver: "Hi I'm proficient in C++.",
    avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
  },
  {
    id: 3,
    name: "Abe Gillian",
    role: "Junior",
    email: "abe@gillian.com",
    dateHired: "2013/03/03",
    status: "On Leave",
    popOver: "I know a bit about JavaScript",
    avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
  },
  {
    id: 4,
    name: "Emma Stone",
    role: "Junior",
    email: "emma@stone.com",
    dateHired: "2014/01/24",
    status: "inactive",
    popOver: "I am the original.",
    avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
  },
  {
    id: 5,
    name: "Micheal Scott",
    role: "Team leader",
    email: "micheal@scott.com",
    dateHired: "2009/12/31",
    status: "Active",
    popOver: "My workload is already too much.",
    avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
  },
  {
    id: 6,
    name: "Mila Kunis",
    role: "Junior",
    email: "mila@kunis.com",
    dateHired: "2013/08/08",
    status: "Inactive",
    popOver: "This should show a funny quote for work.",
    avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
  },
  {
    id: 7,
    name: "George Clooney",
    role: "Senior",
    email: "george@clooney.com",
    dateHired: "2013/08/12",
    status: "Active",
    popOver: "I love Nespresso",
    avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
  },
  {
    id: 8,
    name: "Ryan Gossling",
    role: "Senior",
    email: "mike@tango.com",
    dateHired: "2007/03/03",
    status: "On Leave",
    popOver: "This is just a hobby.",
    avatar: "https://bootdey.com/img/Content/avatar/avatar5.png",
  },
  {
    id: 9,
    name: "Emma Watson",
    role: "Junior",
    email: "emma@watson.com",
    dateHired: "2014/01/08",
    status: "Trail",
    popOver: "No! I''m the older one.",
    avatar: "https://bootdey.com/img/Content/avatar/avatar6.png",
  },
  {
    id: 10,
    name: "Robert Downey Jr.",
    role: "Senior",
    email: "thebest@jarvis.com",
    dateHired: "2003/12/31",
    status: "Active",
    popOver: "Shh.. I am Ironman.",
    avatar: "https://bootdey.com/img/Content/avatar/avatar7.png",
  },
];

function storeUsers() {
  sessionStorage.clear();
  if (sessionStorage.getItem("users") == null) {
    //sets array in session storage
    sessionStorage.setItem("users", "[]");
  }

  let newUsers = JSON.parse(sessionStorage.getItem("users")); // gets the old data from the array in storage

  users.forEach((element) => {
    newUsers.push(JSON.stringify(element));
  });
  sessionStorage.setItem("users", JSON.stringify(newUsers));
}

storeUsers();

if (localStorage.getItem("tickets") == null) {
  //checks local storage
  localStorage.setItem("tickets", "[]");
}
