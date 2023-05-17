                    //ninja
var ninjaButton = 314;
var ninjaScore = document.querySelector("#ninja-score");

function addninja() {
    ninjaButton++;
    ninjaScore.innerHTML = ninjaButton;
}
                        //  pirate
var pirateButton = 159;
var pirateScore = document.querySelector("#pirate-score");

function addpirate() {
    pirateButton++;
    pirateScore.innerText = pirateButton;
}
               //ads
function hide() {
    document.getElementById("three");
    three.parentNode.removeChild(three);
}
function timeo() {
    alert("The Ninjas have won!");
}
setTimeout(timeo, 13000);
