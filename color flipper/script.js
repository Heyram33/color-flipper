const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const textchange=document.querySelector(".color")
const button=document.querySelector(".btn")

button.addEventListener("click", ()=>{
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNum()];
    }
    
    document.body.style.backgroundColor= hexColor;
    textchange.textContent= hexColor;

});

function getRandomNum(){
    return Math.floor(Math.random()*hex.length);
}