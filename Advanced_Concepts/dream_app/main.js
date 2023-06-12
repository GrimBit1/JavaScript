import "./style.css";

const form = document.querySelector("form");
const submitButton = document.querySelector('[type="submit"]');
console.log(submitButton);
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  submitButton.setAttribute("disabled", "");
  const data = new FormData(form);

  const response = await fetch("http://localhost:5000/dream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: data.get("prompt"),
    }),
  });
  if (response.ok) {
    // main code here
  } else {
    const err = await response.text();
    alert(err);
    console.error(err);
  }
  const image = await response.json();
  submitButton.removeAttribute("disabled");

  const result = document.querySelector("#result");
  result.innerHTML = `<img src="${image}" alt="${prompt}" height="80%"/>`;
});
