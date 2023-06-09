window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    const dataModal = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]');

    dataModal.forEach(item => {
        item.addEventListener('click', () =>{
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        })
    })

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    })

    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    })




})