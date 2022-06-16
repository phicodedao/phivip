const btn = document.querySelector(".icon-menu");
const btnclose = document.querySelector(".icon-menu-close");
btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    console.log("active");
})
btnclose.addEventListener('click', () => {
    btn.classList.remove('active');

})