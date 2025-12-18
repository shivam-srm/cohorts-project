

let btn= document.querySelector('button')
let main = document.querySelector('main')

btn.addEventListener ('click', function(){
    let div = document.createElement('div')
    div.style.height = '100px'
    div.style.width = '100px'
    let r2 = Math.floor(Math.random() * 256);
    let g2 = Math.floor(Math.random() * 256);
    let b2 = Math.floor(Math.random() * 256);
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100 );
    let z = Math.floor(Math.random() * 360);
    div.style.top= x+"%"
    div.style.left= y+"%"
    div.style.rotate= z+"deg"
    div.style.backgroundColor = `rgb(${r2},${g2},${b2})`
    div.style.position='absolute'
    console.log(div)
    main.appendChild(div)
})