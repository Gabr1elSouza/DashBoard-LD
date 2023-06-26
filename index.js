const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const themeToggler = document.querySelector(".theme-toggler")

//Show sidebar
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display= 'block';
})
//Close sidebar
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display= 'none';
})

//Change thme
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle("dark-theme-variables");

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})