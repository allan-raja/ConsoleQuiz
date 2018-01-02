/***********************************
 * Quiz Game
 * By Allan
 ************************************/


function WordQuestion(questions, answers, correct_answer) {
    this.questions = questions;
    this.answers = answers;
    this.correct_answer = correct_answer;
}

WordQuestion.prototype.Display_Question_Answer = function () {

    // question is displayed
    WriteToConsole(this);

    return this.display_qs;
}

var _dis_score = Display_Score();

/*
    * Answer check
*/
WordQuestion.prototype.Display_Result = function (sel_ans) {
    if (parseInt(sel_ans) === parseInt(this.correct_answer)) {
        console.log('Correct!');
        _dis_score(true);
    }
    else {
        console.log('Wrong! Try again.');
        _dis_score(false);
    }

}

var stop = false;

/* 
    * Start game call
*/

function StartGame() {

    while (!stop) {

        /// select the random question object
        var random_no = Math.floor(Math.random() * question_set.length);

        question_set[random_no].Display_Question_Answer();

        //2. pop is shown 
        var answer_given = window.prompt('Give an answer in integer!');

        //3. Check if game should continue
        if (answer_given === 'exit') {
            stop = true;
            return;
        }

        //4. display result 
        question_set[random_no].Display_Result(answer_given);


    }
};

/// 3 questions

var question1 = new WordQuestion('which is the highest mountain in the world?',
    ['MountEverest', 'Kilimanjaro', 'Alps'], 0);

var question2 = new WordQuestion('Who is the president of the United States?',
    ['Obama', 'Modi', 'Trump'], 2)

var question3 = new WordQuestion('What is the national bird of India?',
    ['Hen', 'Eagle', 'Peacock'], 2);


var question4 = new WordQuestion('Which popular peer-to-peer network was shut down in October 2013?',
    ['MegaUpload', 'ThePirateBay', 'IsoHunt'], 2);

var question5 = new WordQuestion('What is the process called when milk turns into yoghurt?',
    ['Bacteria Fermentation', 'Mold growth', 'Molecule synthesis'], 0);

/// Set of questions
var question_set = [question1, question2, question3, question4, question5];

/*
    * Write to the console.
*/
function WriteToConsole(WordQuestion) {

    console.log(WordQuestion.questions);

    // display the answers one by one with index numbers
    for (var i = 0; i < WordQuestion.answers.length; i++) {
        console.log(i + ' : ' + WordQuestion.answers[i]);
    }
}

function Display_Score() {
    var score = 0;

    return function (withincrement) {
        if (withincrement) {
            score += 1;
            console.log('Your Score is ' + parseInt(score));
            console.log('---------------------------------');
        } else {
            console.log('Your Score is ' + parseInt(score));
            console.log('---------------------------------');
        }

    }
}

StartGame();
