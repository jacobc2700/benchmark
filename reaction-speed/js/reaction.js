//Variables.
var gameInProgress = false;
var timer;
var header = document.getElementById("head");
var createdTime, clickedTime;

//Checks if the game is not in progress.
if(gameInProgress == false) {
    $(document).ready(function() {
        $("#area").on("click", function() {
            startTest();
            gameInProgress = true;
        });
    });
}

//Starts the test.
function startTest() {
    $("#info").text('');
    $("#header").text('Wait for the green!');
    $("#area").css("background", "red");
    var randomNumber = generateRandomNumber(2, 3) * 1000;
    timer = setTimeout(readyToClick, randomNumber);
}

//Runs the reaction speed test.
$(document).ready(function() {
    $("#area").on("click", function() {
        if(gameInProgress) {
            clickedTime = Date.now();
            var reactionTime = (clickedTime - createdTime);
            if(!isNaN(reactionTime)) {
                $("#header").text("Reaction speed: " + reactionTime + " milliseconds.");
                $('#area').css("background", "#fff")
                clearTimeout(timer);
                $("#area").off("click");
            }
        } else if(document.getElementById("header").textContent == 'Wait for the green!') {
            alert('nope');
        }
    });
});

//Stop the user from clicking when it's not green.
$("#area").on("click", function() {
    if(document.getElementById("header").textContent == 'Wait for the green!') {
        alert("You are not allowed to click the area before the area turns green.");
        location.reload();
    }
});

//Tells the user that they should click the screen.
function readyToClick() {
    $("#area").css('background', 'green');
    $("#header").text("Click now!");
    createdTime = Date.now();
}

//Gets a random number.
function generateRandomNumber(min, max) {
    var highlightedNumber = Math.random() * (max - min) + min;
    return highlightedNumber;
};