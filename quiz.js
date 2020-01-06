const sols = ['D','C','B','A','C'];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const progress = document.querySelector(".pb");
form.addEventListener('submit', e=> {
    e.preventDefault();
    let score = 0;
    let answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    answers.forEach((answer,ind )=> {
        if(answer==sols[ind]) {
            score+=20;
        }
        
    })
    console.log(score);
    scrollTo(0,0);
    result.classList.remove("d-none");
    let i =0;
    const intev = setInterval(()=>{
     
        
        result.querySelector("span").textContent=`  ${i}%  `;
        i++;
        if (i > score ) {
            console.log(i);
            clearInterval(intev);
        }
    },10) })

form.addEventListener('click',()=>{ 
    let answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    let checked = 0;
    answers.forEach(answer => {
        if(answer!="") {
            checked+=20;
        }
        
    })
    console.log(checked);
    let str = progress.getAttribute('style');
    console.log(str);
    var i = str.replace(/\D/g, "");
    console.log(i);
    const intev = setInterval(()=>{
     
        
        progress.setAttribute('style',"width : "+ i+"%")
        i++;
        if (i > checked ) {
            clearInterval(intev);
        }
    },20)
    
    
})
