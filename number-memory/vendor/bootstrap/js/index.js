//The start button.
var startButton = document.getElementById("startButton");

//Checks to see if you click the start button.
$(document).ready(function() {
    $("#startButton").unbind().on("click", function() {
        $("#titleHeader").hide();
        $("#infoHeader").hide();
        $("#startButton").hide();
        showNumber();
    });

    $("#resetButton").unbind().on("click", function() {
        window.location.reload();
    });
});

//Number of digits we want the random number to be.
var numberOfDigits = 1;

//The random number for the user to memorize.
var randomNumber;

//Gets a random number of a specified length.
function setNumber() {
    randomNumber = getRandomNumber(numberOfDigits);
}

//Shows the number.
function showNumber() {
    setNumber();

    $("#theNumber").show();
    $("#timerCountdown").show();
    $("#theNumber").text(randomNumber);
    $("#timerCountdown").text("Time: 3");

    setTimeout(function() {
        $("#timerCountdown").text("Time: 2")
    }, 1000);

    setTimeout(function() {
        $("#timerCountdown").text("Time: 1")
    }, 2000);

    setTimeout(function() {
        afterNumber();
    }, 3000);
}

//This function runs after the user has seen the number.
function afterNumber() {
    $(document).ready(function() {
        $("#timerCountdown").hide();
        $("#theNumber").hide();
        $("#infoHeader").show();
        $("#titleHeader").show();
        $("#submitButton").show();
        $("#answerBox").show();
        $("#titleHeader").text("What was the number?");
        $("#infoHeader").text("Click the button to submit your answer.");
    });

    $(document).ready(function() {
        $("#submitButton").unbind().on("click", function() {
            var userValue = $("#answerBox").val();

            if (!/\S/.test(userValue)) {
                alert("Please enter a value.");
                return;
            }

            if (userValue == randomNumber) {
                correctAnswer();
            } else {
                gameOver(userValue, randomNumber);
            }
        });
    });
}

//Runs when the user types the correct number.
function correctAnswer() {
    $("#titleHeader").text("Correct. You passed level " + numberOfDigits + ".");

    numberOfDigits++;

    $("#infoHeader").text("The number was " + randomNumber + ".");
    $("#answerBox").hide();
    $("#answerBox").val("");
    $("#submitButton").hide();
    $("#nextButton").show();

    $(document).ready(function() {
        $("#nextButton").unbind().on("click", function () {
            $("#titleHeader").hide();
            $("#infoHeader").hide();
            $("#nextButton").hide();
            showNumber();
        });
    });
}

//The game is over.
function gameOver(userValue, randomNumber) {
    $("#titleHeader").text("The test is over.");

    $("#infoHeader").text("You entered " + userValue + "." + " The correct answer was " + randomNumber + ". You made it to level " + numberOfDigits + ".");

    $("#resetButton").show();
    $("#answerBox").hide();
    $("#submitButton").hide();
}

//Get a random number of a specified length.
function getRandomNumber(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
}