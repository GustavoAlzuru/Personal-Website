// ANIMATE ON SCROLL

const hiddenEl = document.querySelectorAll('.hidden')
const hiddenLeft = document.querySelector('.hidden-left')
const hiddenRight = document.querySelector('.hidden-right')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    }))
})

const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show-img')
        }else{
            entry.target.classList.remove('show-img')
        }
    }))
}
)
hiddenEl.forEach((element) => {
    observer.observe(element)
})
observerLeft.observe(hiddenLeft)
observerLeft.observe(hiddenRight)
// DARK THEME

const currentTheme = localStorage.getItem('theme')
const buttonDarkMode = document.getElementById('buttonDarkMode')
if(currentTheme){
    document.body.classList.add(currentTheme)
    buttonDarkMode.textContent = '☀'
}

function darkMode(){
    document.body.classList.toggle('dark-mode')
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark-mode')
        buttonDarkMode.textContent = '☀'
    }else{
        localStorage.removeItem('theme', 'dark-mode')
        buttonDarkMode.textContent = '☽'
    }
}

// const hiddenImg = document.querySelector('.about-me-img')