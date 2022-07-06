function submit(){ 
  var y = Math.floor(Math.random() * 10 + 1);

var x = document.getElementById("guessField").value;


if(x == y){
    alert("CONGRATULATIONS!!!" + player_name + "YOU GUESSED IT RIGHT IT " + guess +" GUESSES")
    guess=1;

} else if (x>y){
    guess++;
    alert("Too high!");

} else {
    guess++;
    alert("Too low!");

}
}  
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}