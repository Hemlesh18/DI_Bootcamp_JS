const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const apiUrl = "https://api.giphy.com/v1/gifs/random";

// Function to fetch a random GIF based on the search term
async function fetchRandomGif(searchTerm) {
  try {
    const response = await fetch(`${apiUrl}?api_key=${apiKey}&tag=${searchTerm}`);
    const data = await response.json();
    const gifUrl = data.data.images.original.url;
    return gifUrl;
  } catch (error) {
    console.error("Error fetching random GIF:", error);
    throw error;
  }
}

// Function to create and append a new GIF element
function appendGifElement(gifUrl) {
  const gifContainer = document.getElementById("gifContainer");

  const gifElement = document.createElement("div");
  gifElement.classList.add("gif");

  const imgElement = document.createElement("img");
  imgElement.src = gifUrl;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    gifContainer.removeChild(gifElement);
  });

  gifElement.appendChild(imgElement);
  gifElement.appendChild(deleteButton);
  gifContainer.appendChild(gifElement);
}

// Event listener for the form submission
document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const searchTerm = document.getElementById("searchInput").value;

  // Fetch a random GIF based on the search term
  fetchRandomGif(searchTerm)
    .then((gifUrl) => {
      // Append the GIF to the page
      appendGifElement(gifUrl);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });

  // Reset the search input
  document.getElementById("searchInput").value = "";
});

// Event listener for the "Delete All" button
document.getElementById("deleteAllBtn").addEventListener("click", function() {
  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = "";
});




