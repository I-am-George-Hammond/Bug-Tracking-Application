# Bug Tracking (System Documentation)🐞

## **1. Overview** 
The aim of this project is to create a functional bug tracking application. This application will contain functionalities such as creating a ticket, assigning a relevant person to the ticket and to track the progress of the tickets. The name of our application is INSKT.

---
## **2. Application Requirements**

- There should only be a **single** admin login.
- A user should be able to create a ticket for a bug.
- All the tickets should be displayed.
- Current projects should be displayed.
- A list of all the people and their relevant information should be presented.

---
## **3. Application Functionalities**
In this section the functionality of our system is explained.
### 3.1 Login
The application only has a single admin login.Therefore when a user enters the admin username and password it is validated. If the password and/or username is incorrect the user will be granted 2 more login attempts.

### 3.2 Landingpage
The landingpage serves as the main means of navigating through the application. The landingpage display general information such as the definition of a bug, goal of the project and a inspirational quote for the user 😊.On the left hand side the user wiil find a navigation bar by which the user can choose to go to the bugs,projects,people, add ticket, about and login . 

### 3.3 People
In this section of our application the all relevant people in the company is displayed along with the following information about them:
- Email address
- Name
- Date of hire 
- Title 
- Role in team 
- Additional information about themself

In order to populate all the user we have created an array of objects below is a snippet of the code:

```
//This is the first user which we add to the array 
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
```
In the second function we make use of WEB Api storage which were a requirement for the project. 
```
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
```
### 3.4 Projects
In this section all associated projects will be listed and can be viewed by the user to see all the projects. The projects is also linked to the the ticket in order to show which project is associated to the tickets.

### 3.5 Add ticket
In this section the user will be able to create a new ticket by completing the bug report form. In this form the user is ask select the person responsible to deal with the bug.Next the user is asked to select in which project the bug is. The date of when the bug was discovered is also entered. Thereafter the user is asked to select "Yes" or "No" if the bug caused a complete crash. The user also rate the importance of the bug. Both these inputs will then be used to create the level of importance of the bug. Lastly the user gives a short discription of the bug and submit the report to create the ticket. All these input from the user is validated to ensure that the data captured is valid. 

Below is our function for determining the Bug Level issue

```
let Crash = false;
let Rating = 7;

function DetermineBugLevel(Rating, Crash) {
    let level
    if (Crash === true) {
        level = 'High';
    }
    else if (Rating >= 6) {
        level = 'Intermediate'
    }
    else if (Rating <= 5) {
        level = 'Low'
    }
    return level;
}

console.log(DetermineBugLevel(Rating, Crash));
```
### 3.6 About 
In this section of the application the markdown document for our system documentation is displayed. 

---

## **4. Technical Information** 
The application have been created by using the following components:
1. HTML (HyperText Markup Language): HTML provided the ability to structure our web pages and make our web pages viewable. 

2. CSS (Cascading Style Sheets): Enabled us to to style our website and make it visually more appealing to the user. 

3. JavaScript: JavaScript have been used to make our application interactive and dynamic. 

4. Bootstrap v5.0: The latest version of bootsrap have been utilized to create a responsive website.

5. Web API's : Web Storage API act as a DOM storage which enables us to store all the projects, people and tickets in our system.

---
## 5. Application Theme
Our application theme is based on the 80's retro. 

---
## **Project Contributers**
|Name  | Surname   | StudentID |
|:------:|:-----------:|:-----------:|
|George|Hammond    |577175     |
|Henko |Meyer      |578420     |
|Willem|Engelbrecht|578334     |
|Ruan  |Ludick     |577142     |