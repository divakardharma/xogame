var cond = 1;
var gameOver = false;


function fff1() {
    var mm1, mm2, mm3, mm4, mm5, mm6, mm7, mm8, mm9;
    mm1 = document.getElementById("m1").value;
    mm2 = document.getElementById("m2").value;
    mm3 = document.getElementById("m3").value;
    mm4 = document.getElementById("m4").value;
    mm5 = document.getElementById("m5").value;
    mm6 = document.getElementById("m6").value;
    mm7 = document.getElementById("m7").value;
    mm8 = document.getElementById("m8").value;
    mm9 = document.getElementById("m9").value;


    if ((mm1 == 'X' && mm2 == "X" && mm3 == "X") || 
        (mm4 == 'X' && mm5 == "X" && mm6 == "X") || 
        (mm7 == 'X' && mm8 == "X" && mm9 == "X") || 
        (mm1 == 'X' && mm4 == "X" && mm7 == "X") || 
        (mm2 == 'X' && mm5 == "X" && mm8 == "X") || 
        (mm3 == 'X' && mm6 == "X" && mm9 == "X") || 
        (mm1 == 'X' && mm5 == "X" && mm9 == "X") || 
        (mm3 == 'X' && mm5 == "X" && mm7 == "X")) {
        document.getElementById("try").innerHTML = "Vikarm won the Match";
        gameOver = true;
    }

    else if ((mm1 == 'O' && mm2 == "O" && mm3 == "O") || 
             (mm4 == 'O' && mm5 == "O" && mm6 == "O") || 
             (mm7 == 'O' && mm8 == "O" && mm9 == "O") || 
             (mm1 == 'O' && mm4 == "O" && mm7 == "O") || 
             (mm2 == 'O' && mm5 == "O" && mm8 == "O") || 
             (mm3 == 'O' && mm6 == "O" && mm9 == "O") || 
             (mm1 == 'O' && mm5 == "O" && mm9 == "O") || 
             (mm3 == 'O' && mm5 == "O" && mm7 == "O")) {
        document.getElementById("try").innerHTML = "Vedha won the Match";
        gameOver = true;
    }

    else if (mm1 !== "" && mm2 !== "" && mm3 !== "" && 
             mm4 !== "" && mm5 !== "" && mm6 !== "" && 
             mm7 !== "" && mm8 !== "" && mm9 !== "") {
        alert("It's a draw!");
        gameOver = true;
    }
}

function handleClick(buttonId) {
    if (gameOver) return; 
    
    var button = document.getElementById(buttonId);
    if (button.value !== "") return; 

    if (cond == 1) {
        button.value = "X";
        button.style.color = "white";
        button.style.fontSize="20px";
        button.style.backgroundImage = "url('./assest/v.jpg')";
        button.style.backgroundSize = "cover"; 
        cond = 0;
    } else {
        button.value = "O";
        button.style.color = "white";
        button.style.fontSize="20px";
        button.style.backgroundImage = "url('./assest/v1.jpg')";
        button.style.backgroundSize = "cover"; 
        cond = 1;
    }
    fff1(); 
}

function fun1() { handleClick("m1"); }
function fun2() { handleClick("m2"); }
function fun3() { handleClick("m3"); }
function fun4() { handleClick("m4"); }
function fun5() { handleClick("m5"); }
function fun6() { handleClick("m6"); }
function fun7() { handleClick("m7"); }
function fun8() { handleClick("m8"); }
function fun9() { handleClick("m9"); }



document.addEventListener('DOMContentLoaded', function() {
    var restartBtn = document.getElementById("restart-btn");
    var backgroundMusic = document.getElementById("background-music");
    var playPauseBtn = document.getElementById("play-pause-btn");
    var volumeUpBtn = document.getElementById("volume-up-btn");
    var volumeDownBtn = document.getElementById("volume-down-btn");

    
    if (backgroundMusic.paused) {
        playPauseBtn.innerHTML = '&#9658;';
    } else {
        playPauseBtn.innerHTML = '&#10074;&#10074;'; 
    }

    function resetGame() {
        var buttons = document.querySelectorAll(".c1");
        buttons.forEach(function(button) {
            button.value = "";
            button.style.color = ""; 
            button.style.backgroundImage = ""; 
        });
        document.getElementById("try").innerHTML = "";
        cond = 1; 
        gameOver = false; 
    }

    restartBtn.addEventListener('click', resetGame);

    
    playPauseBtn.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playPauseBtn.innerHTML = '&#10074;&#10074;'; 
        } else {
            backgroundMusic.pause();
            playPauseBtn.innerHTML = '&#9658;'; 
        }
    });

    // Volume Control
    volumeUpBtn.addEventListener('click', function() {
        if (backgroundMusic.volume < 1) {
            backgroundMusic.volume = Math.min(1, backgroundMusic.volume + 0.1);
        }
    });

    volumeDownBtn.addEventListener('click', function() {
        if (backgroundMusic.volume > 0) {
            backgroundMusic.volume = Math.max(0, backgroundMusic.volume - 0.1);
        }
    });
});
