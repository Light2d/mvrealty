const drops = document.querySelectorAll('.menu__sublist')
const menuBtns = document.querySelectorAll('.menu__link-drop')

    var w = window.innerWidth;
    if (w > 768) {
        menuBtns.forEach(el => {
            el.addEventListener('click', e => {
                let currentBtn = e.currentTarget
                let drop = currentBtn.closest('.menu__list li').querySelector('.menu__sublist')
            
                menuBtns.forEach(el => {
                    if(el !== currentBtn) {
                        el.classList.remove('active')
                    }
                })
                drops.forEach(el => {
                    if(el !== drop) {
                        el.classList.remove('active')
                    }
                })
                drop.classList.toggle('active')
                currentBtn.classList.toggle('active')
            })
            document.addEventListener('click', e => {
                if(!e.target.closest('.menu__list')) {
                    menuBtns.forEach(el => {
                        el.classList.remove('active')
                    })
                    
                    drops.forEach(el => {
                        el.classList.remove('active')
                    })
                }
            })
        })
    }



const langMenu = document.querySelector('.menu__sublist-lang')
const lang = document.querySelector('.menu__link-lang')
lang.addEventListener('click', () => {
    langMenu.classList.toggle('active')
})

//======SLIDER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
        992: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        1340: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
    },
    spaceBetween: 20,
    allowTouchMove: false,
    loop: false,
    pagination: {
      el: ".swiper-pagination-1",
    },
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },
  });

  var swiper = new Swiper(".mySwiper-build", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var swiper = new Swiper(".mySwiper-build", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-build",
      prevEl: ".swiper-button-prev-build",
    },
  });

  var swiperPage = new Swiper(".mySwiper-page", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".slideArrow-next",
      prevEl: ".slideArrow-prev",
    },
});
var swiper1 = new Swiper(".mySwiper-blog", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    allowTouchMove: true,
    loop: false,
    pagination: {
      el: ".swiper-pagination-1",
    },
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },
  });

  //--------TABS ITEM-----------

const tabBtns = document.querySelectorAll('.tabsSection__btn')
const tabItems = document.querySelectorAll('.tabsSection__content__items')
function showTabs(tabBtn) {
    let dropDown = document.querySelector('data-dropDown')
    let tabId = tabBtn.getAttribute('data-tab')
    let currentTab = document.querySelector(tabId)

    if (!tabBtn.classList.contains('show')) {
        tabBtn.addEventListener('click', (e) => {
            tabBtns.forEach(btn => {
                btn.classList.remove('show')
            })
    
            tabItems.forEach(tabItem => {
                tabItem.classList.remove('show')
            })
            tabBtn.classList.add('show')
            currentTab.classList.add('show')
        })
    }
    document.querySelector('.tabsSection__btn').click()
}

tabBtns.forEach(showTabs)

//directions

const directionBtns = document.querySelectorAll('.directions__name')
directionBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        const target = e.target
        directionBtns.forEach(btn => {
            btn.classList.remove('_clicked')
        })
        target.classList.add('_clicked')

    })
})

//dropdown
const dropLinks = document.querySelectorAll('.menu__droplink')
const mainLink = document.querySelector('.menu__droplink-main')


function selectLinks() {
    if(dropLinks) {
        dropLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if(link.classList.contains('active')){
                    link.classList.remove('active')
                } else{
                    link.classList.add('active')
                }
                
            })
        })
    }
}

function selecAllLinks() {
    if(dropLinks) {
        dropLinks.forEach(link => {
            mainLink.addEventListener('click', (e) => {
                if(link.classList.contains('active')){
                    dropLinks.forEach(el => {
                        el.classList.remove('active')
                    })
                } else{
                    dropLinks.forEach(el => {
                        el.classList.add('active')
                    })
                }
                
            })
        })
    }
}
selectLinks()
selecAllLinks()

//accordeon

const accordeons = document.querySelectorAll('.accordeon')
accordeons.forEach(el => {
    el.addEventListener('click', e => {
        const self = e.currentTarget
        const control = self.querySelector('.accordeon__control')
        const content = self.querySelector('.accordeon__content')

        self.classList.toggle('open')
    })
})
//burger
const burgerBtn = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.header__body-mobile')
burgerBtn.addEventListener('click', () => {
    menuBody.classList.toggle('active')
})
