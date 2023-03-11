const stringUsers = JSON.parse(sessionStorage.getItem('users'))
let users = []
stringUsers.forEach(element => {
  users.push(JSON.parse(element))
});

function callInfo() {
  $(document).ready(function () {
    $("#id1").popover({ title: users[0].name, content: users[0].popOver });
  });

  $(document).ready(function () {
    $("#id2").popover({ title: users[1].name, content: users[1].popOver });
  });

  $(document).ready(function () {
    $("#id3").popover({ title: users[2].name, content: users[2].popOver });
  });

  $(document).ready(function () {
    $("#id4").popover({ title: users[3].name, content: users[3].popOver });
  });

  $(document).ready(function () {
    $("#id5").popover({ title: users[4].name, content: users[4].popOver });
  });

  $(document).ready(function () {
    $("#id6").popover({ title: users[5].name, content: users[5].popOver });
  });

  $(document).ready(function () {
    $("#id7").popover({ title: users[6].name, content: users[6].popOver });
  });

  $(document).ready(function () {
    $("#id8").popover({ title: users[7].name, content: users[7].popOver });
  });

  $(document).ready(function () {
    $("#id9").popover({ title: users[8].name, content: users[8].popOver });
  });

  $(document).ready(function () {
    $("#id10").popover({ title: users[9].name, content: users[9].popOver });
  });
}

function dismiss(el) {
  el.parentNode.parentNode.style.display = "none";
}
