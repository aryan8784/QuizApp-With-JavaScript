const questions = [{
    'que': '1) What does HTML stand for?',
    'a': 'Hyper Text Markup Language',
    'b': 'Home Tool Markup Language',
    'c': 'Hyperlinks and Text Markup Language',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': '2) Who is making the Web standards?',
    'a': 'Google',
    'b': 'Mozilla',
    'c': 'The World Wide Web Consortium',
    'd': 'Microsoft',
    'correct': 'a'
},
{
    'que': '3) Choose the correct HTML element for the largest heading:',
    'a': ' <head>',
    'b': ' <h1>',
    'c': ' <heading>',
    'd': ' <h6>',
    'correct': 'b'
},
{
    'que': '4) What is the correct HTML element for inserting a line break?',
    'a': ' <break>',
    'b': ' <lb>',
    'c': ' <br>',
    'd': '<h1>',
    'correct': 'c'
},
{
    'que': '5) What is the correct HTML for adding a background color?',
    'a': ' <body bg="yellow">',
    'b': ' <background>yellow</background>',
    'c': ' <body style="background-color:yellow;">',
    'd': '<body .bg="yellow">',
    'correct': 'c'
}
]

let index = 0;
let total = questions.length;
let right = 0;
    wrong = 0;

const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.Options')



// function start 
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    // console.log(data);
    quesBox.innerHTML = data.que;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct) {
right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
                // console.log(input.value);
            }
        }
    )
    return answer;
}


const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )

}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thanks For Playing Quiz Questions</h3>
    <h2> ${right} / ${total} are Correct </h2>
    </div>
    ` 
}


loadQuestion();