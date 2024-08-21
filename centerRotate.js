const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = innerHeight;
canvas.width = innerWidth;

const axe = new Image();
axe.src = "fűrész.png";
window.addEventListener("load", ()=>{
    degress();
});


function degress(){
    ctx.drawImage(axe, 100,100);
    ctx.style.transform = "rotate(100deg)";
}