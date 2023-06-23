const monster = document.getElementById('monster');
const inputUsuario = document.getElementById('input-usuario');
const inputClave = document.getElementById('input-clave');
const body = document.querySelector('body');

const anchoMitad = window.innerWidth/2;
const altoMitad = window.innerHeight/2;


body.addEventListener('mousemove', (m)=>{
    if(m.clientX < anchoMitad && m.clientY < altoMitad) {
        monster.src = "/gengar_AB.jpg";
    } else if(m.clientX < anchoMitad && m.clientY > altoMitad) {
        monster.src = "/gengar_IZ.jpg";
    } else if(m.clientX > anchoMitad && m.clientY < altoMitad) {
        monster.src = "/gengar_DE.jpg";
    } else {
        monster.src = "/gengar_AB.jpg";
    }
})


//https://yandex.com/images/search?img_url=https%3A%2F%2Fwww.itl.cat%2Fpngfile%2Fbig%2F35-350542_arti-made-a-gengar-wallpaper-cartoon.png&lr=21293&p=4&pos=36&rpt=simage&text=gengar%20png