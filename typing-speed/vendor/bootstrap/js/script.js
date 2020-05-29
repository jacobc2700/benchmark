//Count amount of words in a string.
function countWords(str) {
    return str.trim().split(/\s+/).length;
}

//Possible paragraphs to type.
var paragraphs = ["Otters have long, slim bodies and relatively short limbs. Their most striking anatomical features are the powerful webbed feet used to swim, and their seal-like abilities holding breath underwater. Most have sharp claws on their feet and all except the sea otter have long, muscular tails.",
"Chickens are omnivores. In the wild, they often scratch at the soil to search for seeds, insects and even animals as large as lizards, small snakes, or young mice.", "As scientists have discovered more theropods closely related to birds, the previously clear distinction between non-birds and birds has become blurred.",
"Gang violence in Brazilian prisons is common. However, officials reported that the inmates had shown no signs prior to the riot that they would start something of such magnitude.", "Stephen was a well established figure in Anglo-Norman society by 1135. He was extremely wealthy, well-mannered and liked by his peers; he was also considered a man capable of firm action.",
"The Cabinet Leader is appointed yearly by the full council of 53 councillors. The Cabinet Leader then picks their deputy and up to 8 other councillors to form the executive cabinet. Each cabinet member makes the decisions about the portfolio that they are allocated.",
"Many strains of Hereford have used other cattle breeds to import desired characteristics, and this has led to changes in the breed as a whole. However, some strains have been kept separate, and these have retained characteristics of the earlier breed, such as hardiness and thriftiness."];

//Gets a random number.
var randomNumber = Math.floor(Math.random() * paragraphs.length);

//Random paragraph.
var paragraph = paragraphs[randomNumber];

//Length of random paragraph.
var paragraphLength = countWords(paragraph);

//Amount of seconds passed.
var sec = 0;

//Shows if the game is in progress.
var isGameInProgress = false;

//Show the random paragraph.
document.getElementById("text").innerHTML = paragraph;

//Resets the typing test.
function reset() {
    document.getElementById("text").innerHTML = paragraph;
    sec = 0;
    isGameInProgress = false;
    myStopFunction();
    document.getElementById("area").value = "";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
}

//Check if the typing test is done.
function isGameDone() {
    var text = document.getElementById("area").value;
    if (text == paragraph) {
        var speed = Math.round((60 / sec) * paragraphLength);
        document.getElementById("area").style.display = 'none';
        document.getElementById("time-paragraph").style.display = 'none';
        document.getElementById("text").style.display = 'none';
        document.getElementById("score-shower").innerHTML = "Your typing speed is approximately " + speed + " words per minute.";
        reset();
    }
}

//Tell the user that they are not allowed to copy and paste.
// function pasted() {
//     alert('Pasting text into this area in order to bypass typing the text is not allowed. Your typing test will now be reset.');
//     location.reload();
// }

//Starts the game.
$(document).ready(function() {
    $('#area').on('keydown', function() {
        if (!isGameInProgress) {
            startGame();
        }
        isGameInProgress = true;
    })
    $('#area').on('keyup', function() {
        if (this.value.length > 1) {
            isGameDone();
        }
   });
});

//Pad the time.
function pad(val) { 
    return val > 9 ? val : "0" + val; 
}

//Interval variable.
var interval;

//Start the game.
function startGame() {
    interval = setInterval(myTimer, 1000);
}

//The timer object.
function myTimer() {
    document.getElementById("seconds").innerHTML = pad(++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
}

//Clear the interval.
function myStopFunction() {
    clearInterval(interval);
}