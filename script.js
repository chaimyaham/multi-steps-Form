const year=document.getElementById('year')
const monthly=document.getElementById('monthly')


const num=document.querySelectorAll('.num')
const step=document.querySelectorAll('.step')
const nextbtn=document.querySelectorAll('.next')
const backbtn=document.querySelectorAll('.back')

year.addEventListener('change',()=>{
   
   if(monthly.style.color===""||monthly.style.color==="rgb(2, 41, 90)"){
        monthly.style.color="#9699ab"
     
    }else{
        monthly.style.color="#02295a"
   
    }
 
  
})
nextbtn.forEach((elt,index) => {
    elt.addEventListener("click",()=>{
        const inputs=[...step[index].querySelectorAll('input')]
        const allValid=inputs.every(input =>input.checkValidity())
        const labels=[...step[index].querySelectorAll('label')]
        console.log(labels)
        if(allValid){
            step[index+1].style.opacity="1"
            step[index+1].style.transform="translateX(0%)"
            step[index+1].style.transition="all .5s ease-in-out"
             step[index].style.opacity="0"
            step[index].style.transform="translateX(-50%)"
            step[index].style.transition="all .5s ease-in-out"
            
            num[index].classList.remove("active")
            num[index+1].classList.add("active")
            inputs.forEach((elt,i)=>{
             const mylabel=labels[i].querySelector('.error')
             if (mylabel){
                 mylabel.style.opacity="0"
             }
                elt.style.border="2px solid rgb(2, 41, 90)"
            })
        }else{
            inputs.forEach((elt,i)=>{
               const valid= elt.checkValidity()
               if (!valid){
                const mylabel=labels[i].querySelector('.error')
                if (mylabel){
                    mylabel.style.opacity="1"
                }
               elt.style.border="2px solid red"
               }
            })
        }

    })
    
});

backbtn.forEach((elt,index) => {
    elt.addEventListener("click",()=>{

            step[index].style.opacity="1"
           step[index].style.transform="translateX(0%)"
           step[index].style.transition="all .5s ease-in-out"
            step[index+1].style.opacity="0"
           step[index+1].style.transform="translateX(100%)"
           step[index+1].style.transition="all .5s ease-in-out"
           num[index+1].classList.remove("active")
           num[index].classList.add("active")
    })
    
});



    



