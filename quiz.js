const Sols = ['D','C','B','A'];
const form = document.querySelector(".quiz-form");
const progress = document.querySelector(".pb");
form.addEventListener('submit', e=> {
    e.preventDefault();
    let score = 0;
    let answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    console.log(answers);
})
form.addEventListener('click',()=>{ 
    let answers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    let checked = 0;
    answers.forEach(answer => {
        if(answer!="") {
            checked+=25;
        }
        
    })
    console.log(checked);
    console.log(progress);
    progress.setAttribute('style',"width : "+ checked+"%")
    console.log(progress);
})
