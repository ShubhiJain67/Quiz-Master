//-----------------------------------------------------------------------------------------//
//                              As Soon as the page gets loaded                            //
//-----------------------------------------------------------------------------------------//


$(document).ready(function () {
    loadQuizOptions();
});


//----------------------------- Loading Quiz Options -------------------------------//

function loadQuizOptions() {
    for(let quiz in quizes){
        quizesHtml+=`<button id="${quiz}" class="bttn" onclick="start(this.id)">${quiz}</button>`;
    }
    questions="";
    quizName="";
    set("quizes",quizesHtml);
}

//---------------------------- Start with Selected Quiz -----------------------------//

function start(id) {
    questions=quizes[id];
    quizName=id;
    minLeft=quizTime[id].min;
    secLeft=quizTime[id].sec+1;
    console.log("Ques : "+questions);
    console.log("Quiz Name : "+quizName);
    hide("quizOptions");
    show("personalInfo");
}

//----------------------------- Loading Introduction -------------------------------//

function loadIntroduction() {
    userName=document.getElementById("name").value;
    result.total.value = size(questions);
    introHtml = `<h2 class="heading">Welcome ${userName}</h2>`;
    if (size(questions) > 0) {
        introHtml += `<p>There are a total of ${size(questions)} questions in ${quizName} Quiz.</p>
                <button class="bttn" onclick="StartQuiz()">Start</button>`;   
        set("home",introHtml);  
        loadQuestions();
    } else {
        introHtml += `<p>No questions avaiable for the time being! Please try later</p>`;
        set("home",introHtml);
    }
    show("home");
    hide("personalInfo");
}

//------------------------------- Loading Questions --------------------------------//

function loadQuestions() {
    // console.log("Loading Questions");
    questionHtml=`<h4 id="timer"></h4>`;
    for (let i = 0; i < size(questions); i++) {
        let qid = i + 1;
        questionHtml += `<div id="question${qid}" style="display:none">
                            <h4>Question ${qid} of ${size(questions)}</h4>
                            <hr/>
                            <h3>${questions[i].question}</h3>'`;
        for (let j = 0; j < questions[i].options.length; j++) {
            let oid = j + 1;
            questionHtml += `<button id="option-${qid}-${oid}" class="option" onclick="SelectOption(this.id)">${questions[i].options[j]}</button>`;
        }
        if(i!=0){
            questionHtml+=`<button id="back${qid}" class="bttn" onclick="Back(this.id)">Back</button>`;
        }
        if (i == size(questions) - 1) {
            questionHtml += `<button class="bttn" onclick="EndQuiz()">Submit</button>`;
        } else {
            questionHtml += `<button id="next${qid}" class="bttn" onclick="Next(this.id)">Next</button>`;
        }
        questionHtml += `<hr/>
                        </div>`;
    }
    set("questions",questionHtml);
}

//--------------------------------- Loading Results ---------------------------------//

function loadResults() {
    // console.log("Loading Result");
    result.total.value = size(questions);
    result.correct.value = result.attempted.value - result.wrong.value;
    result.score.value = result.correct.value + "/" + result.total.value;
    result.percentage.value = ((result.correct.value * 100) / result.total.value).toFixed(2) + "%";
    result.skipped.value = size(questions) - result.attempted.value;
    for (let key in result) {
        resultHtml += `<tr>
                        <td>${result[key].name}</td>
                        <td>${result[key].value}</td>
                    </tr>`;
    }
    set("resultTable",resultHtml);
}
