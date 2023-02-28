let menuVisible = false;
//Para que muestre el menu en dispositivos que no sean pc
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("ul").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("ul").classList ="responsive";
        menuVisible = true;
    }
}    

function seleccionar(){
    //se cierra el menu una vez seleccionado una opc
    document.getElementById("ul").classList ="";
    menuVisible = false;
}
//animacion de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("HABILIDADES");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("ruby");
        habilidades[3].classList.add("comunicacion");
        habilidades[4].classList.add("trabajo");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("dedicacion");
    }
}

//scroll de animacion
window.onscroll = function(){
    efectoHabilidades();
}
