const para = document.querySelector('p')

    const characters ="ASDEFGHGFHDJEKNRBHJKJNMqwertyuioasdghjklxcvbnm"
    const text = para.innerText
    let iteration=0
    para.addEventListener('mouseenter' , function(){
        setInterval(()=>{

        
        const str = text.split('').map((char,index)=>{
            if(index< iteration){
                return char
            }
            return characters.split("") [Math.floor(Math.random() * 53)]
        }).join('')
        para.innerText = str
        iteration += 0.1
    
        },30)
})