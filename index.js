const currentTheme = localStorage.getItem('theme')
if(currentTheme){
    document.body.classList.add(currentTheme)
}

function darkMode(){
    document.body.classList.toggle('dark-mode')
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark-mode')
    }else{
        localStorage.removeItem('theme', 'dark-mode')
    }
}
