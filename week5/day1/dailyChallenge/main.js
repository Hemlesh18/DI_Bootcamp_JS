const form = document.getElementById("my-form");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("last-name").value;


  const data = {
    firstName: firstName,
    lastName: lastName
  };

  const dataJSON = JSON.stringify(data);

  output.textContent = dataJSON;
});