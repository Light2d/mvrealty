//modal
function modalControll() {
    const openBtn = document.querySelector('.intro__search button')
    var modal = document.querySelector('.modals')

function modalOpen() {
    modal.style.display = 'block'
        setTimeout(() => {
            modal.style.opacity = 1
        }, 300)
    document.body.style.overflow = 'hidden'
}

function modalClose(event) {
    const target = event.target
    if (target === modal || target.closest('.modal__close')) {
        modal.style.opacity = 0
        setTimeout(() => {
            modal.style.display = 'none'
        }, 300)
    }
    document.body.style.overflow = 'auto'
}
openBtn.addEventListener('click', modalOpen)
modal.addEventListener('click', modalClose)
}
modalControll()