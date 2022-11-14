const menu = document.getElementById("menu-list");
const exit = document.getElementById("exit-menu");
const navList = document.querySelector("nav");

// menu.addEventListener("click", () => {
//   if(navList.classList.add("open")){
//         menu.style.display = "none"
//   };
   
// });

// exit.addEventListener("click", () => {
//   navList.classList.remove("open");
// });

menu.addEventListener("click", ()=>{
    menu.classList.toggle("hide")
    exit.classList.toggle("hide")
    navList.classList.toggle("slide")
})

exit.addEventListener("click", ()=>{
  menu.classList.toggle("hide")
  exit.classList.toggle("hide")
  navList.classList.toggle("slide")
})