console.log("connected javascript filed!");

// According to button click -> change the color of background of body

let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    if (e.target.id == "grey") {
      body.style.backgroundColor = "gray";
    }
    if (e.target.id == "white") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.id == "IndianRed") {
      body.style.backgroundColor = "IndianRed";
    }
    if (e.target.id == "red") {
      body.style.backgroundColor = "red";
    }
    if (e.target.id == "black") {
      body.style.backgroundColor = "black";
    }
  });
});
