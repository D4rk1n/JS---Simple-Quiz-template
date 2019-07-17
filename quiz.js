const sols = ['D','C','B','A'];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const progress = document.querySelector(".pb");
form.addEventListener('submit', e=> {
    e.preventDefault();
    let score = 0;
    let answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    answers.forEach((answer,ind )=> {
        if(answer==sols[ind]) {
            score+=25;
        }
        
    })
    result.querySelector("span").textContent=`  ${score}%  `;
    result.classList.remove("d-none");
})
form.addEventListener('click',()=>{ 
    let answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    let checked = 0;
    answers.forEach(answer => {
        if(answer!="") {
            checked+=25;
        }
        
    })
    progress.setAttribute('style',"width : "+ checked+"%")
})
