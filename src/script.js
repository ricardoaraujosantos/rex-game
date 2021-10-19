const background = document.querySelector('.background');
const dinoRex = document.querySelector('.rex');
let isJumping = false; //Boolean to fix bug jump over the jump
let position = 0;

document.addEventListener('keyup', handleKeyUp);

function handleKeyUp(e) {
    if(e.keyCode === 32) {
        if(!isJumping) jumper();
    };
};

function jumper() {
    isJumping = true; //Boolean to fix bug jump over the jump

    let upPosition = setInterval(() => {
        if(position >= 350){
            clearInterval(upPosition); 

            let downPosition = setInterval(() => {
                if(position <= 0){
                    clearInterval(downPosition);
                    isJumping = false; //Boolean to fix bug jump over the jump

                } else {
                    position -= 20;
                    dinoRex.style.bottom = position + 'px';
                };
            });

        } else {  
            position += 20;
            dinoRex.style.bottom = position + 'px';
        };

    }, 20);
};

//function create cactus as a child div of the background div
function createCactus() {
    const cactus = document.createElement('div');
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let cactusPosition = 1000;
    let newCactus = Math.random() * 6000;

    let leftCactusPosition = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftCactusPosition);
            background.removeChild(cactus);

            //Game Over
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftCactusPosition);
            
            document.body.innerHTML = `
            <div class='game-over'>
            <h1>Game over</h1>
            <input class="reset" type="button" value= "Jogar" onclick = jogar()></input>
           </div>
            `;
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        } 
    }, 20)
    setTimeout(createCactus, newCactus);
};
createCactus();

function jogar(){
    location.reload();
};