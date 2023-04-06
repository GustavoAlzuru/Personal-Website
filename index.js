// ANIMATE ON SCROLL

const hiddenEl = document.querySelectorAll('.hidden')
const hiddenLeft = document.querySelector('.hidden-left')
const hiddenRight = document.querySelector('.hidden-right')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    }))
})

const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
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
const buttonDarkMode = document.querySelector('.buttonDarkMode')
if(currentTheme){
    document.body.classList.add(currentTheme)
    buttonDarkMode.innerHTML = '<i class="fa-regular fa-sun"></i>'
}

function darkMode(){
    document.body.classList.toggle('dark-mode')
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark-mode')
        buttonDarkMode.innerHTML= '<i class="fa-regular fa-sun"></i>'
    }else{
        localStorage.removeItem('theme', 'dark-mode')
        buttonDarkMode.innerHTML = '<i class="fa-regular fa-moon"></i>'
    }
}

// NAVIGATION MOBILE

const navLinks = document.querySelector('.nav-links')
const openLinks = document.querySelector('.mobile-nav')
const closeLinks = document.querySelector('.close-nav')

openLinks.addEventListener('click', () => {
   navLinks.classList.add('visible')
})
closeLinks.addEventListener('click', () => {
    navLinks.classList.remove('visible')
})

// GET THE INFORMATION OF THE FORM
const form = document.getElementById('contact-information')
const buttonForm = document.querySelector('.form-submit')
const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'

const handleSubmit = (event) => {
    event.preventDefault()
    buttonForm.disabled = true
    const formData = new FormData(form)
    fetch(scriptURL, {method: 'POST', body: formData})
    .then(response => {
        alert('Success!', response)
        buttonForm.disabled = false
    }).catch(error => {
        console.log(error.TypeError)
        buttonForm.disabled = false
    })
}

