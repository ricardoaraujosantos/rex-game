const background = document.querySelector('.background');
const dinoRex = document.querySelector('.rex');
let isJumping = false; //Boolean to fix bug jump over the jump

document.addEventListener('keyup', handleKeyUp);

function handleKeyUp(e) {
    if(e.keyCode === 32) {
        if(!isJumping) jumper();
    };
};

function jumper() {
    let position = 0;
    isJumping = true; //Boolean to fix bug jump over the jump

    let upPosition = setInterval(() => {
        if(position >= 200){
            clearInterval(upPosition); 

            let downPosition = setInterval(() => {
                if(position <= 0){
                    clearInterval(downPosition);
                    isJumping = false; //Boolean to fix bug jump over the jump

                }else{
                    position -= 20;
                    dinoRex.style.bottom = position + 'px';
                };
            });

        }else{  
            position += 20;
            dinoRex.style.bottom = position + 'px';
        };

    }, 20);
};

//function create cactus as a child div of the background div
function createCactus() {
    const cactus = document.createElement('div');
    cactus.classList.add('cactus');
    cactus.style.left = 1100 + 'px';
    background.appendChild(cactus);

    let cactusPosition = 1100;
    let newCactus = Math.random() * 7000;

    let leftCactusPosition = setInterval(() => {
        if(cactusPosition < -100){
            clearInterval(leftCactusPosition);
            background.removeChild(cactus);
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
            console.log(cactusPosition)
        }
    }, 20)
    setTimeout(createCactus, newCactus);
};
createCactus();