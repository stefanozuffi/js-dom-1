const element = document.querySelector('img')
const light_btn = document.querySelector('button')


function switcher(object) {
    if (object.src.includes('yellow_lamp.png')) {
         object.src='./img/white_lamp.png'
    }
    else if (object.src.includes('white_lamp.png')) {
         object.src='./img/yellow_lamp.png'
    }
}

function change_btn(btn) {
    if (btn.innerHTML.includes('Accendi')) {
        btn.innerHTML = 'Spegni'
    }
    else if (btn.innerHTML.includes('Spegni')) {
        btn.innerHTML = 'Accendi'
    }
}



light_btn.addEventListener('click', () => switcher(element))
light_btn.addEventListener('click', () => change_btn(light_btn))
