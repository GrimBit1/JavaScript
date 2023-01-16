// const prompt = require("prompt-sync")({ sigint: true });

console.log("Hi");

const game = () => {
  let a = prompt("What do you choose Snake, Water or Gun :");
  let b = a.trim();
  let choice = b.toLowerCase();
  console.log(choice);
  let z = "i";
  if (choice == "gun") {
    // This is for giving input and assigning it
    z = "g";
  } else if (choice == "snake") {
    z = "s";
  } else if (choice == "water") {
    z = "w";
  } else {
    alert("You can't choose any other ");
  }

  // This code is for computer to choose between 3 choices
  let Choices = ["snake", "water", "gun"];

  let com_choice = parseInt(Math.random() * 3);

  console.log(com_choice);

  let com_c = Choices[com_choice]; // We got our choice from the computer

  let j = "i";
  if (com_c == "gun") {
    j = "g";
  } else if (com_c == "snake") {
    j = "s";
  } else {
    j = "w";
  } // We got our choice from the computer
  console.log(j);

  // This condition statement will check the choice between two user and will tell who won
  if (z == "g") {
    if (j == "g") {
      alert("Both Choose Same");
      let retry = confirm("Retry");
      if (retry) {
        game();
      }
    } else if (j == "s") {
      alert("You Won");
    } else {
      alert("Computer Won");
    }
  } else if (z == "s") {
    if (j == "g") {
      alert("Computer Won");
    } else if (j == "s") {
      alert("Both Choose Same");
      let retry = confirm("Retry");
      if (retry) {
        game();
      }
    } else {
      alert("You Won");
    }
  } else {
    if (j == "g") {
      alert("You Won");
    } else if (j == "s") {
      alert("Computer Won");
    } else {
      alert("Both Choose Same");
      let retry = confirm("Retry");
      if (retry) {
        game();
      }
    }
  }
};
game()
