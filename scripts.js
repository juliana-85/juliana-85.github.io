var desplegarMenu = document.getElementById("desplegar");
var contraerMenu = document.getElementById("contraer");
var mouseSobreBotas = document.getElementById("botas");
var mouseSobredesplegable1 = document.getElementById("desplegable1");
var bntCelular = document.getElementById("botonCelular");


bntCelular.addEventListener("click", ()=>{
var posicionMenuCelular = document.getElementById("menuCelular").style.left;
if(posicionMenuCelular<"-20em") {
document.getElementById("lineaSuperior").style.transform="rotate(45deg)";
document.getElementById("lineaSuperior").style.boxShadow="none";
document.getElementById("lineaSuperior").style.top="1.7em";
document.getElementById("lineaInferior").style.transform="rotate(-45deg)";
document.getElementById("menuCelular").style.left="-2em";
}else{
document.getElementById("lineaSuperior").style.transform="rotate(0deg)";
document.getElementById("lineaSuperior").style.boxShadow="#059900 0 .8em";
document.getElementById("lineaSuperior").style.top="0em";
document.getElementById("lineaInferior").style.transform="rotate(0deg)";
document.getElementById("menuCelular").style.left="-19em";
};
});


mouseSobredesplegable1.addEventListener("mouseover", ()=>{
    document.getElementById("bot1").style.left="-23vw";
    document.getElementById("bot2").style.left="6.25em";
    document.getElementById("bot3").style.left="6.25em";
});

mouseSobreBotas.addEventListener("mouseover", ()=>{
    document.getElementById("bot1").style.left="-23vw";
    document.getElementById("bot2").style.left="6.25em";
    document.getElementById("bot3").style.left="6.25em";
});

mouseSobreBotas.addEventListener("mouseout", ()=>{
    document.getElementById("bot1").style.left="0vw";
    document.getElementById("bot2").style.left="0em";
    document.getElementById("bot3").style.left="0em";
});

desplegarMenu.addEventListener("click", ()=>{
    document.getElementById("desplegable").style.top="0em";
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegar").style.display="none";
    document.getElementById("contraer").style.display="block";
});

contraerMenu.addEventListener("click", ()=>{
    document.getElementById("desplegable").style.top="-6em";
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegar").style.display="block";
    document.getElementById("contraer").style.display="none";
});