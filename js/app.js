document.addEventListener("DOMContentLoaded", function(){
    app();
});

function app(){
    btnMenu();
}
function btnMenu(){
    const botonOpen = document.getElementById("iconMenu");
    const botonClose = document.getElementById("btn-close");
    const body = document.querySelector("body"); 
    const menu = document.querySelector(".navegacion-principal");
    //let contador = 0;

    botonOpen.addEventListener('click', fijarBody,true);
    botonClose.addEventListener('click', desfijarBody,true);

    function fijarBody(){
            body.classList.add("fijar-body");
            botonClose.classList.add("btn-visible");
            botonOpen.classList.add("btn-invisible");
            menu.classList.add("menu-visible");
    }
    function desfijarBody(){
        body.classList.remove("fijar-body");
        botonClose.classList.remove("btn-visible");
        botonOpen.classList.remove("btn-invisible");
        menu.classList.remove("menu-visible");
    }
}