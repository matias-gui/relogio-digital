let hr = document.getElementById('hr');
let min = document.getElementById('min');
let seg = document.getElementById('seg');
let ampm = document.getElementById('ampm');
let background = document.querySelector('.containerPrincipal');

function horaAtual(){
    let horario = new Date();
    let h = horario.getHours();
    let m = horario.getMinutes();
    let s = horario.getSeconds();
    let am = 'AM'

    if( h >= 0 && h < 10){
        h = '0' + h
    }if(h < 12){
        am = 'AM'
    }
    if(h > 12){
        am = 'PM'
    }
    if(m >= 0 && m < 10){
        m = '0' + m
    } if(s >= 0 && s < 10){
        s = '0' + s
    }
    if( h >= 5 && h < 12){
        background.style.background= "url('../imagens/jonas-weckschmied--N_UwPdUs7E-unsplash.jpg') center center fixed no-repeat"
        background.style.backgroundSize = "cover"
    }if( h >= 12 && h < 18){
        background.style.background = "url('../imagens/wendell-adriel-l-s-sevgogkK4FE-unsplash.jpg') center center fixed no-repeat"
        background.style.backgroundSize = "cover"
    }if( h >= 18 || h < 5){
        background.style.background = "url('../imagens/davide-sibilio-quOy9JPjEKs-unsplash.jpg') center center fixed no-repeat"
        background.style.backgroundSize = "cover"
    }
    hr.innerHTML =  h
    min.innerHTML = m
    seg.innerHTML = s
    ampm.innerHTML = am
    setTimeout(horaAtual, 1000)
}
horaAtual()


