const bg = document.getElementsByTagName('body');
const Mode_icon = document.getElementById('Mode');
const Switch_Mode = document.getElementById('switch');
const Inner_text = document.getElementById('inner-text');

Mode.onclick = function() {
    document.body.classList.toggle('dark-mode');
    Switch_Mode.classList.toggle('switch-active');
    Inner_text.classList.toggle('Inner-text-active');

    if (document.body.classList.contains('dark-mode')) {
        Inner_text.innerHTML = 'Light';
        document.body.style.backgroundImage = "url('./images/dark.png')";
        document.querySelector('.logo').src = './images/r_light.png';
        document.querySelector('.skill-img').src = './images/skill-dark1.png';
        document.querySelector('.pic').style.filter = "brightness(70%)";
        document.querySelector('.pic').style.filter = "contrast(85%)";
    } else {
        Inner_text.innerHTML = 'Dark';
        document.body.style.backgroundImage = "url('./images/bg3.png')";
        document.querySelector('.logo').src = './images/logo_r.png';
        document.querySelector('.skill-img').src = './images/skill-light1.png';
        document.querySelector('.pic').style.filter = "brightness(100%)";
        document.querySelector('.pic').style.filter = "contrast(100%)";
    }
}

window.onload = setInterval(() => {
    document.querySelector(".spinner").style.display = "none";
}, 1000);

$(document).ready(function() {
    $('.social-link').hide().delay(1000).fadeIn('slow');
});