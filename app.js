const displayGrid = document.querySelector('.grid')
const elements = document.getElementsByClassName('bg')
const allElements = document.querySelectorAll('.grid div')
const results = document.getElementById('results')

let userCurrrentPosition = 217
let bulletCurrentPosition = 217
let bulletPosition = bulletCurrentPosition
let width = 15
let timerId

let randomArr = []
let removed = []
for(let i = 0; i<225; i++){
    const elements = document.createElement('div')
    elements.classList.add('bg')
    displayGrid.append(elements)

}
// draw user
    elements[userCurrrentPosition].classList.add('user')
    


 function moveUser(e){
    elements[userCurrrentPosition].classList.remove('user')

    
    switch(e.key){
        case 'ArrowLeft':
            if(userCurrrentPosition > 210) userCurrrentPosition -= 1, bulletCurrentPosition -= 1
            break
        case 'ArrowRight':
           if(userCurrrentPosition < 224) userCurrrentPosition += 1, bulletCurrentPosition += 1
            break
            
    }
    elements[userCurrrentPosition].classList.add('user')
   
    
 }
 document.addEventListener('keyup', moveUser)
 
 // invaders array
 while(randomArr.length <= 20){
    const random = Math.floor(Math.random() * 22) + 1
    if(randomArr.indexOf(random) === -1) randomArr.push(random);
    
console.log(randomArr)

    }


 function invaders(){
    for(let i = 0; i < randomArr.length; i++){
     elements[randomArr[i]].classList.add('invaders')
    }
 }
 invaders()



function shooting(e){
    // console.log('hh')
    let laserId
    let currentShooterIndex = userCurrrentPosition
    function moveLaser(){   
    elements[currentShooterIndex].classList.remove('bullets')
    if(currentShooterIndex - width >= 0){ 
        currentShooterIndex -= 15
        elements[currentShooterIndex].classList.add('bullets')
            }
    if(elements[currentShooterIndex].classList.contains('invaders')){
        elements[currentShooterIndex].classList.remove('invaders')
        elements[currentShooterIndex].classList.remove('bullets')
        
        
        const index = randomArr.indexOf(currentShooterIndex)
         removed.push(index)
    console.log(removed.length)
        clearInterval(laserId)
        currentShooterIndex = userCurrrentPosition
            }
             if(removed.length ===randomArr.length){
            results.innerHTML = 'you win'
            
            clearInterval(laserId)
    }
    if(currentShooterIndex - width <= 0){
        elements[currentShooterIndex].classList.remove('bullets')
        currentShooterIndex = userCurrrentPosition
        clearInterval(laserId)
        
            }
   
        }
        switch(e.key){
            case 'ArrowUp':
            laserId =  setInterval(moveLaser, 200)  
            }
            
            
        }
// timerId = setInterval(shooting, 200)
document.addEventListener('keydown', shooting)