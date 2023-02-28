// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Olá mundo!";

// document.querySelector("html").addEventListener("click", () => {
//     alert("Ai! Pare de me cutucar!");
// });
  
// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/js.png") {
//     myImage.setAttribute("src", "images/node.png");
//   } else {
//     myImage.setAttribute("src", "images/js.png");
//   }
// };

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
  }  
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, ${storedName}`;
  };

  myButton.onclick = () => {
    setUserName();
  };
  