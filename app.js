// ClassList = add/remove a class
const toggle = document.querySelector('.nav-toggle')
const navList = document.querySelector('.nav-list')

/*
Listen for a click event on menu icon and
display the navlist on screensize <= 900px
*/
toggle.addEventListener('click', () => {
    navList.classList.toggle("show-links");
})