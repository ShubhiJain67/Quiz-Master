//-----------------------------------------------------------------------------------------//
//                                           VARIABLES                                     //
//-----------------------------------------------------------------------------------------//

let userName = "";
let questionHtml = "", introHtml = "", resultHtml = "",quizesHtml="";
let questions,quizName;
let quizes = {
    Logical: [
        // QUESTION 1
        {
            question: " Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?",
            options: ["10","16","13","15"],
            correct: 4,
            answered: false
        },
        // QUESTION 2
        {
            question: "Look at this series: 36, 34, 30, 28, 24, … What number should come next?",
            options: ["22", "26", "23", "20"],
            correct: 1,
            answered: false
        },
        // QUESTION 3
        {
            question: "Look at this series: 2, 1, (1/2), (1/4), … What number should come next?",
            options: ["1/3", "1/8", "2/8", "1/16"],
            correct: 2,
            answered: false
        }
    ],
    Maths: [
        // QUESTION 1
        {
            question: "Find the sum of 111+222+333",
            options: ["700", "666", "999", "66"],
            correct: 2,
            answered: false
        },
        // QUESTION 2
        {
            question: "Subtract 457 from 832",
            options: ["375", "57", "376", "970"],
            correct: 1,
            answered: false
        },
        // QUESTION 3
        {
            question: "50 times 5 is equal to",
            options: ["2500", "505", "500", "None of these"],
            correct: 4,
            answered: false
        },
        // QUESTION 4
        {
            question: "90/10=",
            options: ["9", "10", "None of these"],
            correct: 1,
            answered: false
        },
        // QUESTION 5
        {
            question: "Simplify: 26+32-12",
            options: ["0", "32","56","46"],
            correct: 4,
            answered: false
        }
    ],
    English: [
        // QUESTION 1
        {
            question: "She works ---- Saturday",
            options: ["at", "to", "in","on"],
            correct: 4,
            answered: false
        },
        // QUESTION 2
        {
            question: "I stay at home ---- the morning.",
            options: ["at", "to", "in","on"],
            correct: 1,
            answered: false
        },
        // QUESTION 3
        {
            question: " How do you get to work? ----.",
            options: ["by car", "in car", "by the car","on car"],
            correct: 1,
            answered: false
        }
    ],
    History: [
        // QUESTION 1
        {
            question: "Which of the following Gupta emperors is represented his coins as playing the lute or Veena?",
            options: [" Chandragupta-I", " Chandragupta-II", "Samudragupta", "Skandagupta"],
            correct: 3,
            answered: false
        },
        // QUESTION 2
        {
            question: "Who is the author of Vikramakacharita?",
            options: ["Ravi Kirti", "Mangalesa", "Bana", "Bihana"],
            correct: 4,
            answered: false
        },
        // QUESTION 3
        {
            question: "With reference to the invaders in ancient India which one of the following is the correct chronological order?  ",
            options: ["Greeks-Sakas-Kushanas", "Greeks-Kushanas-Sakas", "Sakas-G reeks-Kushanas", "Sakas-Kushanas-Greeks"],
            correct: 1,
            answered: false
        },
        // QUESTION 4
        {
            question: "The system of philosophy with which the name of Kapila is prominently associated is:  ",
            options: ["Purva Mimamsa", "Sankhya", "Nyaya", "Uttara Mimamsa"],
            correct: 2,
            answered: false
        },
        // QUESTION 5
        {
            question: "Among the four works mentioned below which one is encyclopaedic in nature?",
            options: ["Amarakosha", "Siddhanta Shiromani","Brihat Samhita","Astanga Hridaya"],
            correct: 3,
            answered: false
        }
    ],
    Geography: [
        // QUESTION 1
        {
            question: "The World Largest desert is?",
            options: ["Thar", "Kalahari", "Sahara", "Sonoran"],
            correct: 3,
            answered: false
        },
        // QUESTION 2
        {
            question: "Country that has the highest in Barley Production ?",
            options: ["China", "India", "Russia", "France"],
            correct: 3,
            answered: false
        },
        // QUESTION 3
        {
            question: "The metal whose salts are sensitive to light is ?",
            options: ["Zinc", "Silver", "Copper", "Aluminium"],
            correct: 2,
            answered: false
        },
        // QUESTION 4
        {
            question: "The Central Rice Research Station is situated in ?",
            options: ["Chennai", "Cuttack", "Bangalore", "Quilon"],
            correct: 2,
            answered: false
        },
        // QUESTION 5
        {
            question: "Mount Everest is located in ?",
            options: ["India", "Nepal"],
            correct: 2,
            answered: false
        },
        // QUESTION 6
        {
            question: "The device used for measuring altitudes is ?",
            options: ["Altimeter", "Ammeter", "Audiometer"],
            correct: 1,
            answered: false
        }
    ]
};
let quizTime={
    Logical:{
        min:1,
        sec:0
    },
    Maths:{
        min:2,
        sec:0
    },
    English:{
        min:3,
        sec:0
    },
    History:{
        min:4,
        sec:0
    },
    Geography:{
        min:5,
        sec:0
    }
}
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