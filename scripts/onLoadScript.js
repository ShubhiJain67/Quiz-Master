//-----------------------------------------------------------------------------------------//
//                                           VARIABLES                                     //
//-----------------------------------------------------------------------------------------//

let userName="";
let questionHtml = "", introHtml = "", resultHtml = "";
let questions = [
    // QUESTION 1
    {
        question: "The World Largest desert is?",
        options: ["Thar", "Kalahari", "Sahara", "Sonoran"],
        correct: 3,
        answered:false
    },
    // QUESTION 2
    {
        question: "Country that has the highest in Barley Production ?",
        options: ["China", "India", "Russia", "France"],
        correct: 3,
        answered:false
    },
    // QUESTION 3
    {
        question: "The metal whose salts are sensitive to light is ?",
        options: ["Zinc", "Silver", "Copper", "Aluminium"],
        correct: 2,
        answered:false
    },
    // QUESTION 4
    {
        question: "The Central Rice Research Station is situated in ?",
        options: ["Chennai", "Cuttack", "Bangalore", "Quilon"],
        correct: 2,
        answered:false
    },
    // QUESTION 5
    {
        question: "Mount Everest is located in ?",
        options: ["India", "Nepal"],
        correct: 2,
        answered:false
    },
    // QUESTION 6
    {
        question: "The device used for measuring altitudes is ?",
        options: ["Altimeter", "Ammeter", "Audiometer"],
        correct: 1,
        answered:false
    }
];
let result = {
    total: {
        name: "Total Questions",
        value: 0
    },
    attempted: {
        name: "Attempted",
        value: 0
    },
    skipped: {
        name: "Skipped",
        value: 0
    },
    correct: {
        name: "Correct Answers",
        value: 0
    },
    wrong: {
        name: "Wrong Answers",
        value: 0
    },
    percentage: {
        name: "Percentage",
        value: ""
    },
    score: {
        name: "Total Score",
        value: ""
    }
};


//-----------------------------------------------------------------------------------------//
//                              As Soon as the page gets loaded                            //
//-----------------------------------------------------------------------------------------//


$(document).ready(function () {
    document.getElementById("home").style.display="none";
});


//----------------------------- Loading Introduction -------------------------------//

function loadIntroduction() {
    userName=document.getElementById("name").value;
    result.total.value = questions.length;
    // console.log("Loading Intro");
    introHtml = `<h2 class="heading">Welcome ${userName}</h2>`;
    if (questions.length > 0) {
        introHtml += `<p>There are a total of ${questions.length} questions</p>
                <button class="bttn" onclick="StartQuiz()">Start</button>`;
        document.getElementById("home").innerHTML = introHtml;
        loadQuestions();
    } else {
        introHtml += `<p>No questions avaiable for the time being! Please try later</p>`;
        document.getElementById("home").innerHTML = introHtml;
    }
    document.getElementById("personalInfo").style.display="none";
    document.getElementById("home").style.display="block";
}

//------------------------------- Loading Questions --------------------------------//

function loadQuestions() {
    // console.log("Loading Questions");
    for (let i = 0; i < questions.length; i++) {
        let qid = i + 1;
        questionHtml += `<div id="question${qid}" style="display:none">
                            <h4>Question ${qid} of ${questions.length}</h4>
                            <hr/>
                            <h3>Which month comes right before june?</h3>'`;
        for (let j = 0; j < questions[i].options.length; j++) {
            let oid = j + 1;
            questionHtml += `<button id="option-${qid}-${oid}" class="option" onclick="SelectOption(this.id)">${questions[i].options[j]}</button>`;
        }
        if(i!=0){
            questionHtml+=`<button id="back${qid}" class="bttn" onclick="Back(this.id)">Back</button>`;
        }
        if (i == questions.length - 1) {
            questionHtml += `<button class="bttn" onclick="EndQuiz()">Submit</button>`;
        } else {
            questionHtml += `<button id="next${qid}" class="bttn" onclick="Next(this.id)">Next</button>`;
        }
        questionHtml += `<hr/>
                        </div>`;
    }
    document.getElementById("questions").innerHTML = questionHtml;
}

//--------------------------------- Loading Results ---------------------------------//

function loadResults() {
    // console.log("Loading Result");
    result.total.value = questions.length;
    result.correct.value = result.attempted.value - result.wrong.value;
    result.score.value = result.correct.value + "/" + result.total.value;
    result.percentage.value = ((result.correct.value * 100) / result.total.value).toFixed(2) + "%";
    result.skipped.value = questions.length - result.attempted.value;
    for (let key in result) {
        resultHtml += `<tr>
                        <td>${result[key].name}</td>
                        <td>${result[key].value}</td>
                    </tr>`;
    }
    document.getElementById("resultTable").innerHTML = resultHtml;
}
