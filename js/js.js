const soundBtn = document.querySelectorAll('.btn')
const sound = document.querySelector('#sound')

function btnClick(){
    soundBtn.forEach(btn => {
        sound.play("audio/soundBtn.mp3");
        soundBtn.addEventListener("click", btnClick());
         })};

