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