
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

/* Text Animation */

window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;
  
    for(var i = 0; i < elements.length; i++) {
      let element = elements[i];

      if(element.getBoundingClientRect().top < screenSize) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    }
});