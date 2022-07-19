player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question "+player1_name;
document.getElementById("player_answer").innerHTML="Answer "+player2_name;

function send()
{
    getword=document.getElementById("word").value.toLowerCase();
    console.log(getword);
    word1=getword.charAt(1);
    word2=getword.charAt(Math.floor(getword.length/2));
    word3=getword.charAt(getword.length-1);
    removeword1=getword.replace(word1,"_");
    removeword2=removeword1.replace(word2,"_");
    removeword3=removeword2.replace(word3,"_");
    console.log(removeword3);    

     question_word="<h4 id='word_display'>Q."+removeword3+"</h4>";
     input_box="<br>Answer:<input type='text' id='word_check_box'>";
     check_button="<br> <button class='btn btn-info' onclick='check()'>Check</button>";
     row=question_word+input_box+check_button;
     document.getElementById("output").innerHTML=row;
     document.getElementById("word").value="";
}
answer_turn="player2";
question_turn="player1";

function check()
{
    get_answer=document.getElementById("word_check_box").value.toLowerCase();
if(get_answer==getword)
{
    if(answer_turn=="player1")
    {
        player1_score= player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else
    {
        player2_score= player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;  
    }
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn"+player2_name;    
    }
    else
    {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn"+player1_name;
    }
    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn"+player2_name;    
    }
    else
    {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn"+player1_name;
    }
}
}