var url = 'http://api.icndb.com/jokes/random?exclude=%5Bexplicit%5D';
console.log(url);

fetch(url)

    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
        console.log(response); /* Access to the data from the API */
        console.log(response.value.joke);
    
    container.innerHTML += '<div class="temp">' + response.value.joke + '</div>'; 
    })

