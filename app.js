window.onload =  ()=> {
    const hide = document.querySelector('.hide');
    const mouse = document.getElementsByClassName('navigation')

    hide.addEventListener('mouseover', ()=> {
        mouse.classList.add('show');
        alert('hello')
    });

    console.log(mouse.classList);

    hide.addEventListener('mouseout', () => {
        mouse.classList.remove('show');
    });

}


