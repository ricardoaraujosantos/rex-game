const background = document.querySelector('.background');
const dinoRex = document.querySelector('.sonic');


let isJumping = false; //Boolean to fix bug jump over the jump
let position = 0;
let score = 0;
let level = 0;
let speed = 30;
let stage = 1;
let gameOver = false;



document.addEventListener('keyup', handleKeyUp);

function start(){
    if(jumper){
  document.querySelector('.btnStart').style.display = 'none';
 }
}
start();

function handleKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isJumping) {
            jumper();
        };
    };
};



function jumper() {

    isJumping = true; //Boolean to fix bug jump over the jump

    let upPosition = setInterval(() => {
        if(position >= 460){
            document.querySelector('.sonic').style.backgroundImage = "url('./images/spinner.gif')";
            clearInterval(upPosition); 

            let downPosition = setInterval(() => {
                if(position <= 150){
                    document.querySelector('.sonic').style.backgroundImage = "url('./images/sonic.gif')";
                    clearInterval(downPosition);
                    isJumping = false; //Boolean to fix bug jump over the jump

                } else {
                    position -= 8;
                    dinoRex.style.bottom = position + 'px';
                };
            }, 10);

        } else {  
            position += 150;
            dinoRex.style.bottom = position + 'px';
        };

    });
};

//function create cactus updates score and nivel
function createEggmanScore() {
    let eggman = document.createElement('div');
    eggman.classList.add('eggman');
    eggman.style.left = 1400 + 'px';
    background.appendChild(eggman);

    let eggmanPosition = 1400;
    let newCactus = Math.random() * 6000;
    

    let leftEggmanPosition = setInterval(() => {

        if(speed % 2 !== 0 && eggmanPosition === 1400){
            document.querySelector('.eggman').style.backgroundImage = "url('./images/eggman-furadeira.gif')";
        }

        if(eggmanPosition < -120){
            level += 1;
            speed -= 1;
            score += 10;

            let myScore = document.querySelector('.valueScore');
            myScore.innerHTML = score;

            //Remove the cactus when exit the screen
            clearInterval(leftEggmanPosition);
            background.removeChild(eggman);

            //Game Over
        } else if(eggmanPosition > 0 && eggmanPosition < 120 && position < 160){
            clearInterval(leftEggmanPosition);
            gameOver = true;
            document.body.innerHTML = `
            <header class='game-over'>
                <h1>Game over</h1>
                <p>Pontuação = ${score} Pts</p>
                <input class="btnStart" type="button" value= "Jogar" onclick = playGame()></input>
           </header>
            `;
            
        } else {
            eggmanPosition -= 10;
            eggman.style.left = eggmanPosition + 'px';
        } 
    }, speed)
    setTimeout(createEggmanScore, newCactus);
};
createEggmanScore();

function playGame(){
    location.reload();
};