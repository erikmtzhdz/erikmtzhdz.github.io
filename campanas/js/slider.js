(function(){

    /* Ponerlos en un arreglo */
    const sliders = [...document.querySelectorAll('.campana001img__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    
    /* Esta linea sirve para mostrar o debugear los codigos en el navegador
    console.log(sliders); */

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        /* Esta linea sirve para mostrar o debugear los codigos en el navegador
        console.log(add);*/
        const currentTestimony = document.querySelector('.campana001img__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('campana001img__body--show');
        if (value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('campana001img__body--show');


    }

})();