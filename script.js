const year=document.getElementById('year')
const monthly=document.getElementById('monthly')
const hiddenPara=document.querySelectorAll('.hiddenPara')
const planeName=document.getElementById('plane-name')
const planAmount=document.getElementById('plan-amount')
const planType=document.getElementById('planType')
const verification=document.querySelector('.verification')
const radioPlan = document.querySelectorAll('input[name="plan"]');
const add = document.querySelectorAll('input[name="add"]');

const num=document.querySelectorAll('.num')
const step=document.querySelectorAll('.step')
const nextbtn=document.querySelectorAll('.next')
const backbtn=document.querySelectorAll('.back')
const  yearInfo=document.querySelectorAll('.yearInfo')
const more=document.querySelectorAll('.more')



console.log(add)



year.addEventListener('change',()=>{
   
   if(monthly.style.color===""||monthly.style.color==="rgb(2, 41, 90)"){
       planType.innerText="(yearly)"
       console.log(planType.innerText)
        monthly.style.color="#9699ab"
        yearInfo[0].innerText="$90/yr"
        yearInfo[1].innerText="$120/yr"
        yearInfo[2].innerText="$150/yr"
        more[0].innerText="+$10/yr"
        more[1].innerText="+$20/yr"
        more[2].innerText="+$20/yr"

        
        hiddenPara.forEach(elt => {
            elt.style.display="block"

            
        });
       
       
     
    }else{
        monthly.style.color="#02295a"
        yearInfo[0].innerText="$9/mo"
        yearInfo[1].innerText="$12/mo"
        yearInfo[2].innerText="$15/mo"
        more[0].innerText="+$1/mo"
        more[1].innerText="+$2/mo"
        more[2].innerText="+$2/mo"
        planType.innerText="(monthly)"
        console.log(planType.innerText)
        hiddenPara.forEach(elt => {
            elt.style.display="none"

            
        });
    }
 
  
})
nextbtn.forEach((elt,index) => {
    elt.addEventListener("click",()=>{
        const inputs=[...step[index].querySelectorAll('input')]
        const allValid=inputs.every(input =>input.checkValidity())
        const labels=[...step[index].querySelectorAll('label')]
       
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

            radioPlan.forEach((element,index)=> {
    
                if(element.checked){
                    planeName.innerText=element.value
                    planAmount.innerText=yearInfo[index].innerText
                
                }
                
            });
            add.forEach((element,index)=> {
    
                if(element.checked){
                    
                    
                
                }else{
                    
                }
                
            });

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



    



