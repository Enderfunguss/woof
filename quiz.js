player1Name = localStorage.getItem("player1_name");
player2Name = localStorage.getItem("player2_name");
player1Score = 0;
player2Score = 0;
document.getElementById("player1_name").innerHTML = player1Name + ":";
document.getElementById("player2_name").innerHTML = player2Name + ":";
document.getElementById("player1_score").innerHTML = player1Score;
document.getElementById("player2_score").innerHTML = player2Score;
document.getElementById("player_question").innerHTML = "question turn : " + player1Name;
document.getElementById("player_answer").innerHTML = "answer turn : " + player2Name;
questionTurn = "player1";
answerTurn = "player2";

function send(){
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;
    actualAnswer = parseInt(number1) + parseInt(number2);
    questionNumber = "<h4>" + number1 + "x" + number2 + "</h4>";
    inputBox = "<br> Answer this: <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br>  <button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionNumber + inputBox + checkButton;
    document.getElementById('output').innerHTML = row;
    number1 = document.getElementById('number1').value = "";
    number2 = document.getElementById('number2').value = "";
    
}
function check(){
    getAnswer = document.getElementById('inputCheckBox').value;
    if(getAnswer == actualAnswer){
        if(answerTurn == "player1"){
            updatePlayer1Score = player1Score + 1;
            document.getElementById('player1_score').innerHTML = updatePlayer1Score;
        }
        else{
            updatePlayer2Score = player2Score + 1;
            document.getElementById('player2_score').innerHTML = updatePlayer2Score;
        }
    }
    if(answerTurn == "player1"){
        answerTurn = "player2";
        document.getElementById('player_answer').innerHTML = "Answer turn - " + player2Name;
    }
    else {
        answerTurn = "player1";
        document.getElementById('player_answer').innerHTML = "Answer turn - " + player1Name;
    }
    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById('player_question').innerHTML = "Question turn - " + player2Name;
    }
    else {
        questionTurn = "player1";
        document.getElementById('player_question').innerHTML = "Question turn - " + player1Name; 
    }
}