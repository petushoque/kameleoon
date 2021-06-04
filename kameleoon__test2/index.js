const toggleHeaderButton = document.querySelector('.toggle-header-button')
const header = document.querySelector('.header')

let isHeaderVisible = true

function handleToggleButton () {
    if (isHeaderVisible) {
        header.classList.add('header_invisible');
        isHeaderVisible = false
    }
    else {
        header.classList.remove('header_invisible');
        isHeaderVisible = true
    }
}

toggleHeaderButton.addEventListener('click', () => handleToggleButton())