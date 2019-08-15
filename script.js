'use strict';
// takes the API and adds whatever number the user added and displays that many images
function getDogImage(numOfDogs) {
    if (numOfDogs < 3) {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(response => response.json())
            .then(responseJson => showDogs(responseJson));
    // } else if (numOfDogs > 50) {
    //     return alert("Sorry, only 3 dogs at least and 50 at most!");
    } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
            .then(response => response.json())
            .then(responseJson => showDogs(responseJson));
    }
}

// suppose to display the dog images
function showDogs(responseJson) {
    console.log(responseJson.message);
    console.log("is this working");

    // $('.results-img').replaceWith(`<img src="${response.Json.message.}" class="results-img"`)
    // $('.results').removeClass('hidden');
}

// takes the number from the input
function userDogCall() {
    $('#dog-form').submit(e => {
        e.preventDefault();
        let userNumber = $('#dog-number').val();
        getDogImage(userNumber);
    });
}

$(function() {
    console.log("App Loaded! Waiting for submit!");
    userDogCall();
});