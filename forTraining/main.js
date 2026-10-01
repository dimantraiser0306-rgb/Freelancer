const mainPhoto = document.querySelector('.mainPhoto');

mainPhoto.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth)
    let y = (event.clientY / window.innerHeight)

    mainPhoto.style.transform='translate(-'+x*20+'px, -'+y*20+'px)'
})

const input1 = document.querySelector('.input1');
console.log(input1);
input1.addEventListener('input', (event) => {
    console.log(input1.value)
})

const input2 = document.querySelector('.input2')

input2.addEventListener('input', (event) => {
    console.log(input2.value)
})

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

const content = document.querySelector('.image')

plus.addEventListener('click', (a) => {
    const answer = input1.valueAsNumber + input2.valueAsNumber
    content.textContent = answer;
})

minus.addEventListener('click', (a) => {
    const answer = input1.valueAsNumber - input2.valueAsNumber
    content.textContent = answer;
})

