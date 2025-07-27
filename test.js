let newX = 0, newY = 0, startX = 0, startY = 0;

const object = document.getElementById('object')

object.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX 
    newY = startY - e.clientY 
  
    startX = e.clientX
    startY = e.clientY

    object.style.top = (object.offsetTop - newY) + 'px'
    object.style.left = (object.offsetLeft - newX) + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}