/*const anchors = document.querySelectorAll('a.menu__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
*/
function main(){
const anchors = document.getElementsByClassName('menu__link')
  for (let anchor of anchors) {
    anchor.addEventListener("click", (e)=>{
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: 'center'
      })
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
