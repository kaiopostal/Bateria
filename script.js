document.body.addEventListener('keyup', (event)=>{ //Captura os eventos da pagina inteira
    playSound(event.code.toLocaleLowerCase() );
});


document.querySelector('.composer button').addEventListener('click', () =>{
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split(''); //Gera um array do valor digitado no input
        playComposition(songArray);
    }
    
});


function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`); //Verifica a regra da div
    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active'); //Adiciona a cor ao botao

        setTimeout(()=>{
            keyElement.classList.remove('active'); //Remove cor do botao
        },300);
    }
}


function playComposition(songArray){
    for(let songItem of songArray){
        playSound(`key${songItem}`);
    }
}