(function(){
    /* una constate de tipo arreglo y ponemos los tres puntos para especificar los señaldo */
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            /* Manda un cuadro de mensaje en la pagina */
            //alert('Me diste un click')
            let height = 0;
            let answer = question.nextElementSibling;
            /* Obtener la opregunta o el padre de la respuesta questions__asnwer y el padre question__padding*/
            let addPadding = question.parentElement.parentElement

            addPadding.classList.toggle('questions__padding--add');

            /* Obtener a los hijos en especifico al primero hijo en h3 questions__title para que rote el icono
               de flecha. */
            question.children[0].classList.toggle('questions__arrow--rotate');

            if (answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

             answer.style.height = `${height}px`;
        });
    });

})();