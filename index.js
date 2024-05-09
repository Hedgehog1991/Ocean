

let width = window.innerWidth - 50;
let height = window.innerHeight -50;


 let scaryShark = document.querySelector('.shark')
 let diver = document.querySelector(".diver");
 let moveBy = 10;
 
 window.addEventListener('load', () =>{
     diver.style.position = 'absolute'
     scaryShark.style.position = 'absolute'
     diver.style.left = 0;
     diver.style.top = 0;
    scaryShark.style.left = 0;
    scaryShark.style.top = 0;
 } )


 let moveShark = () => {
  
  
  // shark position
  let sharkPosition = {
    
    x: scaryShark.style.left = parseInt(scaryShark.style.left.slice(0,-2)),
    y: scaryShark.style.top = parseInt(scaryShark.style.top.slice(0,-2))
  
  }
  //diver position 
  let diverPosition= {

      x: diver.style.left = parseInt(diver.style.left.slice(0,-2)),
      y: diver.style.top = parseInt(diver.style.top.slice(0,-2))

  }

  let superVector = {

       x: diverPosition.x - sharkPosition.x,
       y: diverPosition.y - sharkPosition.y
      // x: sharkPosition.x - diverPosition.x,
      // y: sharkPosition.y - diverPosition.y

  }
// need magintude to normalize vector 
      let vectorMagnitude = Math.sqrt(Math.pow(superVector.x,2) + Math.pow(superVector.y,2) )

      let normalizedVector = {x: superVector.x / vectorMagnitude,
                              y: superVector.y / vectorMagnitude}

let speedShark = 5;

  if(vectorMagnitude > 5){ 
    scaryShark.style.left = sharkPosition.x + Math.trunc(normalizedVector.x*speedShark) + 'px'
    scaryShark.style.top = sharkPosition.y + Math.trunc(normalizedVector.y*speedShark) + 'px'
  }
  

   console.log();
 }

 setInterval(moveShark, 50)

 


 window.addEventListener('keydown', (e)=> {
switch(e.key){
  case 'ArrowLeft':
    diver.style.transform = "rotateY(180deg)"
    if(parseInt(diver.style.left.slice(0,-2))> 0){
    diver.style.left = parseInt(diver.style.left) - moveBy + 'px'
    }
  break;
  case 'ArrowRight':
      
      diver.style.transform = "rotateY(0deg)"
      if(parseInt(diver.style.left.slice(0,-2))< width){
        diver.style.left = parseInt(diver.style.left) + moveBy + 'px'
        }
    break;
    case 'ArrowUp':
      diver.style.transform = "rotate(-25deg)"
      if(parseInt(diver.style.top.slice(0,-2) ) > 0){
        diver.style.top = parseInt(diver.style.top) - moveBy + 'px'
      }
    break;
    case 'ArrowDown':
      diver.style.transform = "rotate(45deg)"
      if(parseInt(diver.style.top.slice(0,-2) )< height){
        diver.style.top = parseInt(diver.style.top) + moveBy + 'px' 
      }
    break;

      }
})


 // dykker er egentlig aquaman med en kjæledyr hai. tbc.  



 let tinyGoldfish = document.querySelector("#goldfish-box")

 document.addEventListener("click", () =>{

  tinyGoldfish.style.opacity = "0"



 }
 )

 