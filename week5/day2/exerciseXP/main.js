
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const url = `https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=${apiKey}&limit=10&offset=2`;

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Set up the AJAX request
xhr.open("GET", url, true);

// Set the response type to JSON
xhr.responseType = "json";

// Handle the AJAX response
xhr.onload = function() {
  if (xhr.status === 200) {
    const response = xhr.response;
    console.log(response);
  } else {
    console.error("Error fetching data from the API.");
  }
};

// Send the AJAX request
xhr.send();

// ex2
