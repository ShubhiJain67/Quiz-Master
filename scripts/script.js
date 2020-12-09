//-----------------------------------------------------------------------------------------//
//                           FUNCTIONS WHEN BUTTONS ARE CLICKED                            //
//-----------------------------------------------------------------------------------------//


//------------------------------- GO TO PREVIOUS QUESTION ---------------------------------//

function Back(card){
    // console.log("Back "+card);
    let id = card.substring(4);
    document.getElementById("question" + (Number(id) - 1)).style.display = "block";
    document.getElementById("question" + id).style.display = "none";  
}

//---------------------------------- GO TO NEXT QUESTION ----------------------------------//

function Next(card) {
    // console.log("Next " + card);
    let id = card.substring(4);
    document.getElementById("question" + (Number(id) + 1)).style.display = "block";
    document.getElementById("question" + id).style.display = "none";
}

//------------------------------------ START THE QUIZ ------------------------------------//

function StartQuiz() {
    // console.log("Started Quiz");
    document.getElementById("home").style.display = "none";
    document.getElementById("result").style.display = "none";
    if (questions.length > 0) {
        document.getElementById("question1").style.display = "block";
    }
}

//------------------------------------- END THE QUIZ -------------------------------------//

function EndQuiz() {
    // console.log("Ended Quiz");
    if (confirm("Are you sure want to submit the quiz?")) {
        document.getElementById("question" + questions.length).style.display = "none";
        document.getElementById("result").style.display = "block";
        loadResults();
    }
}

//----------------------------------- RESTART THE QUIZ -----------------------------------//

function Home() {
    // console.log("Redirected to home");
    document.getElementById("home").style.display = "block";
    document.getElementById("result").style.display = "none";
    Reset();
}

//----------------------------------- REST THE STATS ------------------------------------//

function Reset() {
    // console.log("Reseting");
    result.attempted.value = 0, result.wrong.value = 0;
    questionHtml = "", resultHtml = "";
    loadQuestions();
    for (let key in result) {
        result[key].value = (typeof (result[key].value) == Number) ? 0 : "";
    }
}


//-----------------------------------------------------------------------------------------//
//                                 WHEN OPTION IS SELECTED                                 //
//-----------------------------------------------------------------------------------------//


function SelectOption(id) {
    let lastIndex = id.lastIndexOf("-");
    let firstIndex = id.indexOf("-") + 1;
    let currentId = Number(id.substring(firstIndex, firstIndex + 1));
    let correctOption = "option-" + id.substring(firstIndex, lastIndex) + "-" + questions[currentId - 1].correct;
    if(questions[currentId-1].answered==false){
        result.attempted.value++;    
        if (!( id.substring(lastIndex+1) == questions[currentId - 1].correct )) {
            SelectedIncorrect(id);
            result.wrong.value++;
        }
        SelectedCorrect(correctOption);
        questions[currentId-1].answered=true;
    }
    
}

//----------------------------- Correct Option Selected -------------------------------//

function SelectedCorrect(id) {
    let classToAdd = "correctOption";
    if (id != null) {
        document.getElementById(id).classList.add(classToAdd);
    }
}

//------------------------------ Wrong Option Selected -------------------------------//

function SelectedIncorrect(id) {
    let classToAdd = "wrongOption";
    if (id != null) {
        document.getElementById(id).classList.add(classToAdd);
    }
}