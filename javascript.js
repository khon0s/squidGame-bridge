'use sctrict'

let plaque = document.querySelectorAll(".plaque");
let stage = document.querySelectorAll(".stage");
let main = document.querySelectorAll(".main");
let time = document.querySelector(".time");
let ptn = document.getElementById("points");

stage.forEach(e => e.addEventListener("DOMContentLoaded", setValue(e) ));
plaque.forEach(e => e.addEventListener("click", jump));

let currentScore = 0 ;
ptn.innerHTML= currentScore ;
function plusScore(){
  currentScore++;
  ptn.innerHTML= currentScore ;
  if( currentScore === 8 ){
    clearInterval(myInt)
    return youWin();
   }
  return ptn 
}

function jump(e) {
    let myValue = e.target.value;
    console.log( myValue )
    // when you lose
    if (myValue == 0) {
        let parent = e.target.parentNode;
        parent.style.pointerEvents = "none";
        e.target.style.pointerEvents = "none";
        e.target.classList.remove("plaque");
        e.target.classList.add("plaqued");
        console.log("break")
        popUp()
        return
    }
    // when you win
    if (myValue == 1) {
        e.target.style.cssText = `
      background: rgba( 255, 255, 255, 0.55 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 16.5px );
      -webkit-backdrop-filter: blur( 16.5px );
      border-radius: 10px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
     pointer-events: none;
    `;
      plusScore()

        let parent = e.target.parentNode;
        parent.style.pointerEvents = "none";
        return
    }
    console.log("enything else from jump()")
}

function setValue(el) {
    let childs = el.querySelectorAll(".plaque")

    if (Math.random() > 0.5) {
        childs[0].value = 0;
        childs[1].value = 1;
        return childs
    }
    childs[0].value = 1;
    childs[1].value = 0;
    return childs
}

// pop-up displyed when game over
function popUp(){
  const popUp = document.createElement("div");
  const popUpH1 = document.createElement("h1");
  const btn = document.createElement("div");
  btn.innerHTML= "RESET";
  popUpH1.innerHTML= "YOU'RE DEAD"
  btn.classList.add("btn");
  popUp.append(popUpH1);
  popUp.append( btn );
  popUp.classList.add(".popup");
  document.body.append(popUp);
// event to reset the game
function reset(){
    location.reload();
}
  btn.addEventListener("click", reset)

  popUp.style.cssText = `
  position: fixed;
  top: 50px;
//   display: flex;
//   flex-direction: column;
	border-radius: 3px;
	background-color: rgb(185, 180, 174);
	height: 200px;
	width: 40%;
	left: calc(50vw - 40% / 2) ;
	z-index: 5;
	border: 5px solid rgb(124, 121, 121);
  `;
  popUpH1.style.cssText = `
  text-align: center;
  line-height: 200px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  letter-spacing: 3px;
  `;
// block the rest of the game
  plaque.forEach( e => e.style.pointerEvents = "none");
}

// countdown

let future = 120 ;
let myInt = setInterval(setTime, 1000);
function setTime(){
   time.innerHTML = future + " sec" ;
  future -= 1
 if( future < 0  ){  clearInterval(myInt),  popUp()   }
}


// when you pass the game

function youWin(){
  const popUp = document.createElement("div");
  const popUpH1 = document.createElement("h1");
  const btn = document.createElement("div");
  btn.innerHTML= "RESET";
  popUpH1.innerHTML= "YOU WON"
  btn.classList.add("btn");
  popUp.append(popUpH1);
  popUp.append( btn );
  popUp.classList.add(".popup");
  document.body.append(popUp);
// event to reset the game
function reset(){
    location.reload();
}
  btn.addEventListener("click", reset)

  popUp.style.cssText = `
  position: fixed;
  top: 50px;
//   display: flex;
//   flex-direction: column;
	border-radius: 3px;
	background-color: rgb(185, 180, 174);
	height: 200px;
	width: 40%;
	left: calc(50vw - 40% / 2) ;
	z-index: 5;
	border: 5px solid rgb(124, 121, 121);
  `;
  popUpH1.style.cssText = `
  text-align: center;
  line-height: 200px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  letter-spacing: 3px;
  `;
// block the rest of the game
  plaque.forEach( e => e.style.pointerEvents = "none");
}





