let gameSeq=[];
let userSeq=[];

let btns=['red','yellow','green','purpled'];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false)
    {
        console.log("Game has started");
        started= true;

        levelUp();
    }
}) ;
function gameFlash(btn)
{
    btn.classList.add ("flash");
    setTimeout(function(){
        btn.classList.remove("flash")},200);
}
function userflash(btn)
{
    btn.classList.add ("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")},200);
}
function levelUp() {
    userSeq=[];
    level++;
    h2.innerText =`level ${level}`;

    let rdnIdx = Math.floor(Math.random()*3);
    let rdnColor = btns[rdnIdx];
    let rdnbtn=document.querySelector(`.${rdnColor}`);
    // console.log(rdnIdx);
    // console.log(rdnColor);
    // console.log(rdnbtn);
    gameSeq.push(rdnColor);
    gameFlash(rdnbtn);
    console.log(gameSeq);

    gameFlash(rdnbtn);
   
    
    //st random btn

}
function checkAns(idx){
    console.log("current level :" ,level);
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }

    } else {
        h2.innerHTML=(`Ooops!! Game Over your high score was <br>${level}</br>nice moves!!`);
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function() {
         document.querySelector("body").style.backgroundColor="white";},10);
         reset();
         }
         

}

function btnPress()
{
    console.log(this);

    let btn= this;
    // userflash(btn);
    userflash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
   checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}