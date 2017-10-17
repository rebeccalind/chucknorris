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


    
//function funny() {
//    if (funnyanswer() = true);
//    console.log('They think it is funny!');
//} else {
//    console.log('They do not think it is funny');
//}

//function funny() {
//    document.getElementById("funnyanswer").innerHTML = '<div class="temp">' + response.value.joke + '</div>';
//}

    //function myFunction(x) {
//if (x.code != undefined);
//}
//document.getElementById(x).play();
//console.log("Play");

//document.getElementById("funnyanswer").style.color = "red";
//document.getElementById("funnyanswer").activeElement = '<div class="temp">' + response.value.joke + '</div>';