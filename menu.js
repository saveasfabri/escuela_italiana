
let ubicacionPrincipal  = window.pageYOffset;

window.onscroll = () => {
  let Desplazamiento_Actual = window.pageYOffset;

  if (ubicacionPrincipal >= Desplazamiento_Actual) {
    document.querySelector('header').className = "u-clearfix u-header u-header header-enabled";
  }
  else {
    document.querySelector('header').className = "u-clearfix u-header u-header header-off";
  }
  ubicacionPrincipal = Desplazamiento_Actual;
}


/* OPCION DE MENU 2 */

/* let time; 

function desplaza() {
    clearTimeout(time); 
    time = setTimeout(oculta, 1500); 
    document.querySelector("header").className = "u-clearfix u-header u-header header-enabled";       
}

function oculta() {
    if((document.documentElement.scrollTop || self.pageYOffset) != 0) {
        document.querySelector("header").className = "u-clearfix u-header u-header header-off";         
    }    
}
onscroll = desplaza;0
 */