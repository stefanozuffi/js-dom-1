const element = document.querySelector('img')
const light_btn = document.querySelector('button')


function switcher(object) {
   return object.src='./img/yellow_lamp.png'
}


light_btn.addEventListener('click', () => switcher(element))
