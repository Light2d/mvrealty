function showItems() {
    const showMore = document.querySelector('.apartments__button button')
    const productsLength = document.querySelectorAll('.apartments__item').length
    let items = 12

showMore.addEventListener('click', () => {
    items += 3
    const arrayItems = Array.from(document.querySelector('.apartments__items').children)
    const visibleItems = arrayItems.slice(0, items)

    visibleItems.forEach(el => {
        el.classList.add('visible')
    })

    if(visibleItems.length === productsLength) {
        showMore.style.display = 'none'
    }
})
}
showItems()