// function getuserValues() {
//   let ticket = JSON.parse(localStorage.getItem("tickets")); //gets stored array filled with string
//   console.log(ticket);
//   ticket.forEach(
//     (
//       element //element is still string of an object
//     ) => {
//       let userdetail = JSON.parse(element);
//       let uname = document.getElementById("usename");
//       let udes = document.getElementById("des");
//       let udate1 = document.getElementById("date1");
//       let udate2 = document.getElementById("date2");
//       let usev = document.getElementById("sev");
//       let uhead = document.getElementById("head");
//       uname.innerText = userdetail.user;
//       udes.innerText = userdetail.discript;
//       udate1.innerText = userdetail.date;
//       udate2.innerText = userdetail.date;
//       usev.innerText = userdetail.level;
//       uhead.innerText = userdetail.project;
//     }
//   );
// }
// getuserValues();


function createTicket() {}
createUI();
function createUI() {
  let count = 0;
  //adding values
  let ticket = JSON.parse(localStorage.getItem("tickets")); //gets stored array filled with string
  console.log(ticket);
  ticket.forEach(
    (
      element //element is still string of an object
    ) => {
      let userdetail = JSON.parse(element);
      count++;
      let ticketID = `task00${count}`;

      //creating elements
      const div1 = document.createElement("div"); //div for card
      div1.classList.add("card");
      div1.classList.add("mb-3");
      div1.classList.add("bg-light");
      div1.classList.add("condition");
      div1.classList.add("pad-3");
      div1.id = ticketID;

      const div2 = document.createElement("div"); //div for card
      div2.classList.add("card-body");
      div2.classList.add("p-3");
      div2.id = ticketID;
      
      const ticketDrag = document.createElement("div"); // to make ticket dragable
      ticketDrag.classList.add("card");
      ticketDrag.classList.add("draggable");
      ticketDrag.classList.add("shadow-sm");
      ticketDrag.setAttribute("draggable", true);
      ticketDrag.id = ticketID;

      ticketDrag.addEventListener('ondragstart', function tDrag(e) {
        e.dataTransfer.setData("text/plain", e.target.id);
      })

      const ticketDropZone = document.createElement('div')
      ticketDropZone.classList.add('dropzone')

      ticketDrag.addEventListener('onDrop', function tDrop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        const element = document.querySelector(`#${data}`);
        try {
          // remove the spacer content from dropzone
          e.target.removeChild(e.target.firstChild);
          // add the draggable content
          e.target.appendChild(element);
          // remove the dropzone parent
          e.target.replaceWith(...e.target.childNodes);
        } catch (error) {
          console.warn("can't move the item to the same place");
        }
        updateDropzones();
      })

      ticketDrag.addEventListener('ondragover', function tAllowDrop(e) {
        e.preventDefault();
        if (e.target.classList.contains("dropzone")) {
          e.target.classList.add("droppable");
        }
      })

      ticketDrag.addEventListener('dragleave', function tClearDrop(e) {
        e.target.classList.remove("droppable");
      })

      let header = document.createElement("h5"); //project

      const divDates = document.createElement("div"); //div for dates
      divDates.classList.add("grid");

      const divDateIssue = document.createElement("div"); //div for date issed
      divDateIssue.classList.add("right-bor");
      let headIssue = document.createElement("h6");
      headIssue.innerText = "Date of Issue";
      let issueDate = document.createElement("h7"); //date

      const divDateEnc = document.createElement("div"); //div for encounter date
      let headEnc = document.createElement("h6"); //header
      headEnc.innerText = "Date of Encounter";
      let encDate = document.createElement("h7"); //date

      const decHeader = document.createElement("h6");
      decHeader.innerText = "Description";

      let decPar = document.createElement("p"); //description
      decPar.classList.add("des")
      const divSev = document.createElement("div"); //div for severity
      divSev.classList.add("grid");
      const sevHead = document.createElement("h6");
      sevHead.innerText = "Severity :";
      const sevLevel = document.createElement("h6"); //severity
      sevLevel.classList.add("num-color");

      const hr = document.createElement("hr");
      const t = document.createElement("u");

      const divAvatar = document.createElement("div");
      divAvatar.classList.add("float-right");
      divAvatar.classList.add("mt-n1");
      const uName = document.createElement("a"); //name

      //create avatar
      const avatar = document.createElement("img");
      avatar.width = "32";
      avatar.height = "32";
      avatar.className = "rounded-circle";
      avatar.alt = "Avatar";
      avatar.setAttribute("data-bs-toggle", "popover");

      const butView = document.createElement("a");
      butView.classList.add("btn");
      butView.classList.add("btn-outline-primary");
      butView.classList.add("btn-sm");
      butView.innerText = "View";
      butView.href = "#";
      
      const ticketHead = document.createElement('div')
      const ticketTitle = document.createElement('span')
      ticketTitle.classList.add('lead', 'text-primary')
      ticketHead.classList.add('card-title')
      ticketTitle.innerText = 'Ticket'
      ticketHead.appendChild(ticketTitle)
      div2.appendChild(ticketHead)

      //setting values of each card
      header.innerText = userdetail.project;
      issueDate.innerText = userdetail.date;
      encDate.innerText = userdetail.date;
      decPar.innerText = userdetail.descript;
      switch(userdetail.level) 
      { case "low":
        sevLevel.style.color = "green";
        div1.classList.add("condition");
        break;
        case 'Intermediate':
        sevLevel.style.color = "yellow";
        div1.classList.add("condition-intermediate");
        break;
        case 'Medium':
        sevLevel.style.color = "orange";
        div1.classList.add("condition-medium");
        break;
        case 'High':
        sevLevel.style.color = "red";
        div1.classList.add("condition-high");
        break;
        case 'Critical':
        sevLevel.style.color = "red";
        div1.classList.add("condition-high");
        break;
      }
      sevLevel.innerText = userdetail.level;
      uName.innerText = userdetail.user;
      avatar.src = userdetail.avatar;
      avatar.setAttribute("title", userdetail.user);

      //creating ticket
      let board = document.getElementById("condition");
      div2.appendChild(ticketDropZone);
      div1.appendChild(header);
      divDateIssue.appendChild(headIssue);
      divDateIssue.appendChild(issueDate);
      divDates.appendChild(divDateIssue);
      divDateEnc.appendChild(headEnc);
      divDateEnc.appendChild(encDate);
      divDates.appendChild(divDateEnc);
      div1.appendChild(divDates);
      div1.appendChild(decHeader);
      div1.appendChild(decPar);
      divSev.appendChild(sevHead);
      divSev.appendChild(sevLevel);
      div1.appendChild(divSev);
      //divAvatar.appendChild(uName)
      divAvatar.appendChild(t);
      divAvatar.appendChild(avatar);
      div1.appendChild(divAvatar);
      div1.appendChild(hr);
      div1.appendChild(butView);
      div2.appendChild(div1);
      ticketDrag.appendChild(div2);
      div2.append(ticketDropZone)

      const holder1 = document.getElementById("Start");
      holder1.appendChild(ticketDrag);
      console.log(ticketID)
    }
  );
}
