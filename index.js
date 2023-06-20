let homeEl = document.getElementById("home-points")
let guestEl = document.getElementById("guest-points")

let homecount = 0
let guestcount = 0

function home1() {
    homecount += 1
    homeEl.textContent = homecount
}

function home2() {
    homecount += 2
    homeEl.textContent = homecount
}

function home3() {
    homecount += 3
    homeEl.textContent = homecount
}

function guest1() {
    guestcount += 1
    guestEl.textContent = guestcount
}

function guest2() {
    guestcount += 2
    guestEl.textContent = guestcount
}

function guest3() {
    guestcount += 3
    guestEl.textContent = guestcount
}


function resetgame() {
    homecount = 0
    homeEl.textContent = homecount
    guestcount = 0
    guestEl.textContent = guestcount
}
