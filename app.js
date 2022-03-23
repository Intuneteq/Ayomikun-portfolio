window.onload = function () {
    const hide = document.querySelector('.hide');
const mouse = document.getElementsByClassName('navigation')

hide.addEventListener('mouseover', ()=> {
    mouse.classList.add('show');
});

console.log(mouse.classList);

hide.addEventListener('mouseout', () => {
    mouse.classList.remove('show');
});

}


