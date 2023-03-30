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
