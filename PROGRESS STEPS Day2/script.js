const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener('click',()=>{
    currentActive = Math.min(currentActive+1,circles.length)
    update()
})

prev.addEventListener('click',()=>{
    currentActive = Math.max(1,currentActive-1)
    update()
})

function update(){
    let idx = 1
    while(idx < currentActive){
        circles[idx].classList.add('active')
        idx++
    }
    while(idx < circles.length){
        circles[idx].classList.remove('active')
        idx++
    }
    // circles.forEach((circle,idx)=>{
    //     if(idx < currentActive)
    //         circle.classList.add('active')
    //     else
    //         circle.classList.remove('active')
    // })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length-1) / (circles.length - 1) * 100 + '%')

    if(currentActive === 1)
        prev.disabled = true
    else if(currentActive === circles.length)
        next.disabled = true
    else
        prev.disabled = next.disabled = false

}



