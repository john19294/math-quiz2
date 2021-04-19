var player1=localStorage.getItem("player1");
var player2=localStorage.getItem("player2");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1;
document.getElementById("player2_name").innerHTML=player2;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn:"+player1;
document.getElementById("player_answer").innerHTML="answer turn:"+player2;
function Send(){
   
        number1 = document.getElementById("number1").value;
        number2 = document.getElementById("number2").value;
       answer = number1 * number2;
        console.log(answer);
 
    
}
