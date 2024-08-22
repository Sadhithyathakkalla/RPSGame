let userScore =0;
let compScore =0;

let images = document.querySelectorAll('img')

const h3 = document.querySelectorAll('h3') 

const div = document.querySelector('.result')

const getcompChoice=()=>
{
const game =['rock','paper','scissor'];
let random = Math.floor(Math.random()*3)
return game[random]
}

const gameDraw=(userChoice,compChoice)=>
{
    if(userChoice===compChoice)
    {
        console.log('game is draw')
        h3[4].innerText = "Game Was Draw"
    }
}

const winner=(userChoice,compChoice)=>
{
    userScore++;
    console.log(`yours ${userChoice} beats ${compChoice} `)
    h3[0].innerText=userScore;
    div.innerHTML=`<h3>yours ${userChoice} beats ${compChoice}</h3>`
    div.style.backgroundColor='green'
    div.style.color='white'
}

const losser =(userChoice,compChoice)=>
{
    compScore++;
    console.log(`${compChoice} beats yours ${userChoice} `)
    h3[2].innerText=compScore;
    div.innerHTML=`<h3>${compChoice} beats yours ${userChoice}</h3>`
    div.style.backgroundColor='red'
    div.style.color='black'
}
const compare =(userChoice,compChoice)=>
{   
    let userwin = true;
    if(userChoice==='rock')
    {
        userwin = compChoice=='scissor'?true:false;
        if(userwin)
        {
            winner(userChoice,compChoice)
        }
        else{
            losser(userChoice,compChoice)
        }
    }
    else if(userChoice==='paper')
    {
        userwin = compChoice=='rock'?true:false;
        if(userwin)
        {
            winner(userChoice,compChoice)
        }
        else{
            losser(userChoice,compChoice)
        }
    }
    else
    {
        userwin = compChoice=='paper'?true:false;
        if(userwin)
        {
            winner(userChoice,compChoice)
        }
        else{
            losser(userChoice,compChoice)
        }
}}

const playgame = (userChoice,compChoice)=>
{
   if(userChoice===compChoice)
   gameDraw(userChoice,compChoice)
   else
   compare(userChoice,compChoice)
}

images.forEach((image)=>
{
    image.addEventListener('click',()=>
    {
        let userChoice = image.getAttribute('id')
        console.log(`userchoice is ${userChoice}`)
        let compChoice=getcompChoice()
        console.log(`compchoice is ${compChoice}`)
        playgame(userChoice,compChoice)
    })
    
})