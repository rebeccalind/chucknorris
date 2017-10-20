var url = 'http://api.icndb.com/jokes/$jokenumber';

var randomNumber = Math.floor(Math.random() * 600) + 1;
console.log(randomNumber);

fetch(url)

    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
        console.log(response.value[randomNumber].joke);
        container.innerHTML += '<div class="temp">' + response.value[randomNumber].joke + '</div>'; 
    })
