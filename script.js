let randomNumber=parseInt(Math.random()*100+1);
let userInput=document.querySelector('.in');
let submit=document.querySelector('.submit');
let levelmsg=document.querySelector('.highorlow');
let remain=document.querySelector('.no');
let prev=document.querySelector('.prev');
let newbutton=document.querySelector('.msg');
console.log(randomNumber);


let playGame=true;
let attempt=0;
if(playGame)
{   
    submit.addEventListener('click',function(e){
    let guess=parseInt(userInput.value);
    userInput.value='';
    validguess(guess);

})}

function validguess(guess){
    if(isNaN(guess))
    {
        alert('Enter a Valid Number');
    }
    else if(guess<1 || guess>100)
    {
        alert('Enter a Number between 1 and 100');
    }
    else if(attempt>=9)
    {
        let msg=`Game Over!! The Correct Number was ${randomNumber}`;
        levelmsg.innerHTML=msg;
        prev.innerHTML+=`${guess}`;
        remain.innerHTML='0';
        
        endGame();
    }
    else
    {
        checkguess(guess);   
    }
}
function checkguess(guess){
    if(guess > randomNumber)
    {
       prev.innerHTML+= `${guess} `;
       let msg=`your guess is too high`;
       displaymessage(msg);
     
       
    }
    else if(guess < randomNumber)
    {
        prev.innerHTML+= `${guess} `;
        let msg=`your guess is too low`;
        displaymessage(msg);
    }
    else
    {
        prev.innerHTML+= `${guess} `;
        levelmsg.innerHTML='Congratulations!! Your guess is right';
        endGame();
    }
}
function displaymessage(msg)
{

    attempt++;
    console.log(attempt);
    if(attempt===10)
        endGame();
    levelmsg.innerHTML=msg;
     
    remain.innerHTML=''
    remain.innerHTML=`${10-attempt}`;
    
}
function endGame(){
    userInput.setAttribute('disabled','');
    playGame=false;
    let button=document.createElement('button');
    button.setAttribute('id','newgame');
    button.innerHTML=`Start New Game`;
    newbutton.appendChild(button);
    newGame();
}
function newGame(){
    let newGameButton=document.querySelector('#newgame');
    newGameButton.addEventListener('click',function(e){
         userInput.removeAttribute('disabled');
         playGame=true;
         prev.innerHTML=``;
         attempt=0;
         remain.innerHTML=`${10-attempt}`;
         levelmsg.innerHTML=``;
         randomNumber=parseInt(Math.random()*100+1);
         let newbut=document.getElementById('newgame');
         if(newbut)
         {
            newbut.remove();
         }
    })
}