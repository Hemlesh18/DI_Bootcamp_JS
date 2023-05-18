

// Use the Fetch API, to retrieve Chuck Norris jokes from a given category, using this URL:

// https://api.chucknorris.io/jokes/random?category={category}

// Check out the API Chuck Norris Documentation : https://api.chucknorris.io/

// Make sure to check the Response status and throw an error accordingly

// const category = 'dev'; // Replace 'dev' with your desired category

// fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data.value); // Display the Chuck Norris joke
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 10000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();