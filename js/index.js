// Your code goes here

// ------------------
// First modifying the nav links
// ------------------
const allNavLinks = document.querySelectorAll(".nav-link")

allNavLinks.forEach(function (item) {
    // ------ 1st type: Mouse Events
    item.addEventListener("mouseover", function (event) {
        // Changes color of link when the mouse is over it.
        item.style.color = "#17a2b8"
        item.style.transition = ".25s"
        event.preventDefault()
    })

    item.addEventListener("mouseleave", function (event) {
        item.style.color = "#213248"
        event.preventDefault()
    })

    // Stops the page from refreshing when clicked.
    item.addEventListener("click", function () {
        event.preventDefault()
    })

    // ------ 2nd type: CSS Transition Event
    
    // Once the mouse leaves and the transition is completed, changes color of link.
    item.addEventListener("transitionend", function (event) {
        item.style.color = "#ca8c81"
        event.preventDefault()
    })
})

// ------------------
// Next modify the main image
// ------------------
const heroImage = document.querySelector(".intro img")

// ------ 3nd type: Screen Event
document.addEventListener("scroll", function () {
    heroImage.src = "https://source.unsplash.com/random/1000x300"
    gsap.fromTo(".intro img", { opacity: .5, ease: "inout", duration: .25 }, { opacity: 1, duration: .25, });
})

// ------ 4rd type: Pointer Event
heroImage.addEventListener("pointerenter", function () {
    heroImage.src = "https://picsum.photos/1000/300"
    gsap.fromTo(".intro img", { opacity: .5, ease: "inout", duration: .25 }, { opacity: 1, duration: .25, });
})

// ------------------
// Text on the page
// ------------------

const allParagraphs = document.querySelectorAll(".container.home p")

// ------ 5rd type: Clipboard Event
console.log(allParagraphs)

// When you select and copy any paragraph text, the text of that specific paragraph changes.
allParagraphs.forEach(function (item) {
    item.addEventListener("copy", function (event) {
        item.innerText = "You copied me! Oh no, where did I go?!"
    })
})

// ------ 6th type: Resource Event
const mainHeading = document.querySelector(".logo-heading")
console.log(mainHeading)

// When the printer dialogue is opened, changes main heading.
window.addEventListener("beforeprint", function () {
    mainHeading.textContent = "Printing Fun Bus!"
})

// ------ 7th type: Keyboard Event
const nav = document.querySelector(".main-navigation")
document.addEventListener("keydown", function (event) {

    // When they "y" key is pressed, changes background of navigation bar to yellow.
    if (event.key === "y") {
        nav.style.backgroundColor = "#eed6a7"
    }

    gsap.fromTo(".main-navigation", { scale: .8, duration: .5 }, { scale: 1, duration: .5 })
})

// ------ 8th type: Drag & Drop events
const firstContent = document.querySelector(".img-content")
const firstContentImg = firstContent.querySelector("img")

firstContentImg.addEventListener("drag", function () {

    // Changes the main heading when this specific image is dragged.
    mainHeading.textContent = "You're a drag!"
    gsap.to(".img-content", { duration: 2, rotation: 360, });
})

// ------ 9th type: Tab Event
const welcomeMsg = document.querySelector("h2")

document.addEventListener("visibilitychange", function () {

    // If you move away from the tab and return later, the following message will play.
    if (document.visibilityState === 'visible') {
        welcomeMsg.textContent = "Welcome back to Fun Bus!"
        gsap.from(".intro h2", { duration: 2, x: 200, ease: "bounce" });

    } else {
        welcomeMsg.textContent = "You're away :("
    }

});

// ------ 10th type: Double Click + Stop propagation correctly
welcomeMsg.addEventListener("dblclick", function () {

    // Changes background color of welcome message when clicks.
    this.style.backgroundColor = "#eed6a7"
    gsap.from(".intro h2", { duration: 2, x: 200, ease: "bounce" });

    // Doesn't allow the parent background color to change when clicked.
    event.stopPropagation()
})

// Changes the background color of the header.
const intro = document.querySelector(".intro")
intro.addEventListener("dblclick", function () {
    this.style.backgroundColor = "#aaa9a0"
})
