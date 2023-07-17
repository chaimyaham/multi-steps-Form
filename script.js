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

        step[index+1].style.opacity="1"
           step[index+1].style.transform="translateX(0%)"
           step[index+1].style.transition="all .5s ease-in-out"
            step[index].style.opacity="0"
           step[index].style.transform="translateX(-50%)"
           step[index].style.transition="all .5s ease-in-out"
           
           num[index].classList.remove("active")
           num[index+1].classList.add("active")
    })
    
});

backbtn.forEach((elt,index) => {
    elt.addEventListener("click",()=>{
console.log(index)
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



    



