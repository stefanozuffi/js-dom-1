const element = document.querySelector('img')
const light_btn = document.querySelector('button')


function switcher(lamp, btn) {
    if (lamp.src.includes('yellow_lamp.png') && btn.innerHTML.includes('Spegni')) {
         lamp.src='./img/white_lamp.png'
         btn.innerHTML = 'Accendi'
    }
    else if (lamp.src.includes('white_lamp.png') && btn.innerHTML.includes('Accendi')) {
         lamp.src='./img/yellow_lamp.png'
         btn.innerHTML = 'Spegni'
    }
}



light_btn.addEventListener('click', () => switcher(element, light_btn))

