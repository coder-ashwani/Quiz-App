const questions = [
    {
        'que': "Which of the following is a markup language?",
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': "What year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b",
    },
    {
        'que': "What does CSS stand for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "b",
    }

]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optioninputs = document.querySelectorAll(".options");
const loadQuestion = () => {
    if (index == total) {
        return endquiz();
    }
    reset();
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText = data.a;
    optioninputs[1].nextElementSibling.innerText = data.b;
    optioninputs[2].nextElementSibling.innerText = data.c;
    optioninputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswers();
    console.log(ans, data.correct);
    if (ans == data.correct) {
        right++;
        // console.log(right);
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswers = () => {
    let answer;
    optioninputs.forEach(
        (input) => {
            if (input.checked) {
                // console.log("yes");
                answer = input.value;
                console.log(input.value);


            }
            // else{
            //     console.log("no");
            // }
        }
    )
    return answer;
}

const reset = () => {
    optioninputs.forEach(
        (input) => {
            input.checked = false;
        }
    )

}



const endquiz = () => {
    document.getElementById("box").innerHTML = `<div text-align="center">
     <h3> Thank you for playing the quiz </h3>
    <h2> ${right} / ${total} are correct </h2> </div>`;
    }

//initial call
loadQuestion();




