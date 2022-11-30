function moverPosionRamdom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeigth) + 'px';
    elm.style.top = Math.random() * (window.innerWidth - elm.offsetHeigth) + 'px';

}
let bntSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModo = document.getElementsByClassName("modo")[0]

btnNo.addEventListener('mouseenter', function(e) { moverPosionRamdom(e.target)});
btnSi-addEventListener('click', function(e){
    alert('Sabia que dirias que si.');
    
});