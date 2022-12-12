import data from '../database/data.js'

const menuBtn = document.querySelector('.toggle')
const menuTop = document.querySelector('.links ul')
let menuOpen = false

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuTop.classList.add('active')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuTop.classList.remove('active')
        menuOpen = false
    }
})

const cards = document.querySelector('.cards')

function getCard() {
    let displayCard = data.map(function(item) {
        return `
        <div class="card">
            <img src="https://github.com/${item.github}.png" alt=${item.nome}>
            <div class="card-text">
                <h2>${item.nome}</h2>
                <p>${item.email}</p>
            </div>
            <div class="links">
                <a href="https://github.com/${item.github}"  target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/${item.linkedin}"  target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/${item.instagram}"  target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <a href=${item.page} target="_blank" class="btn-link">Profile</a>
        </div>
        `
    })
    displayCard = displayCard.join('')
    cards.innerHTML = displayCard
}

getCard()
