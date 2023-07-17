const year=document.getElementById('year')
const monthly=document.getElementById('monthly')
const next=document.getElementById('next')
const back=document.getElementById('back')
const step2=document.querySelector('.step2')
const step1=document.querySelector('.step1')
const num=document.querySelectorAll('.num')

year.addEventListener('change',()=>{
   
   if(monthly.style.color===""||monthly.style.color==="rgb(2, 41, 90)"){
        monthly.style.color="#9699ab"
     
    }else{
        monthly.style.color="#02295a"
   
    }
 
  
})
next.addEventListener('click',()=>{
    step2.style.opacity="1"
    step2.style.transform="translateX(0%)"
    step2.style.transition="all .5s ease-in-out"
    step1.style.opacity="0"
    step1.style.transform="translateX(-50%)"
    step1.style.transition="all .5s ease-in-out"

    num[0].classList.remove("active")
    num[1].classList.add("active")


})
back.addEventListener('click',()=>{
    step1.style.opacity="1"
    step1.style.transform="translateX(0%)"
    step1.style.transition="all .5s ease-in-out"
    step2.style.opacity="0"
    step2.style.transform="translateX(100%)"
    step2.style.transition="all .5s ease-in-out"

    num[1].classList.remove("active")
    num[0].classList.add("active")

})