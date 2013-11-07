
// A: Initial Page Load
//   - display list of quizzes
//     - make an AJAX call to get the quizzes
//     - done: iterate over theq quizzes
//       - append the quiz to the DOM
//       - set up a 'click' handler for when someone clicks on the quiz
// B: Quiz Chosen
//    - create a session key
//    - render the first question
//      - make an AJAZX call to get the next question
//      - done: replace the contents of .container with the question
//        - display the question text
//        - display each choice
//        - set up a 'click' handler for each choice, when someone clicks on it
// C: Answer Chosen


var Controller = {
  onPageLoad: function() {
    // display the list of quizzes
  },

  onQuizClick: function(e) {
    // the handler to run if the user clicks on a quiz
  },

  onAnswerClick: function(e) {
    // etc.
  }
}

$(document).ready(Controller.onPageLoad);





var quizView = new QuizView(data.quizzes[i]);
$('.container').append(quizView.render())




var QuizView = function(quiz) {
  this.quiz = quiz;
}

QuizView.prototype.render = function() {
  var $quiz = $('#templates .quiz').clone()
  $quiz.html(this.quiz.name);
  return $quiz;
}



var QuestionView = function(question) {
  this.question = question;
}

QuestionView.prototype.render = function() {
  var $question = $('#templates .question').clone()
  $question.find('.question-text').html(this.question.question);
  for (var i in this.question.chioces) {
    var choiceView = new ChoiceView(this.question.choices[i]);
    $question.find('.possible-answers').append(choiceView.render());
  }
  return $question;
}

var ChoiceView = function(choice) {
  this.choice = choice;
}

ChoiceView.prototype.render = function() {
  // etc.
  $choice.on('click', Controller.onAnswerClick);
}




// A: Initial Page Load
//   - display list of quizzes
//     - make an AJAX call to get the quizzes
//     - done: iterate over theq quizzes
//       - append the quiz to the DOM
//       - set up a 'click' handler for when someone clicks on the quiz
// B: Quiz Chosen
//    - create a session key
//    - render the first question
//      - make an AJAZX call to get the next question
//      - done: replace the contents of .container with the question
//        - display the question text
//        - display each choice
//        - set up a 'click' handler for each choice, when someone clicks on it
// C: Answer Chosen


var Controller = {
  onPageLoad: function() {
    // display the list of quizzes
  },

  onQuizClick: function(e) {
    // the handler to run if the user clicks on a quiz
  },

  onAnswerClick: function(e) {
    // etc.
  }
}

$(document).ready(Controller.onPageLoad);





var quizView = new QuizView(data.quizzes[i]);
$('.container').append(quizView.render())




var QuizView = function(quiz) {
  this.quiz = quiz;
}

QuizView.prototype.render = function() {
  var $quiz = $('#templates .quiz').clone()
  $quiz.html(this.quiz.name);
  return $quiz;
}



var QuestionView = function(question) {
  this.question = question;
}

QuestionView.prototype.render = function() {
  var $question = $('#templates .question').clone()
  $question.find('.question-text').html(this.question.question);
  for (var i in this.question.chioces) {
    var choiceView = new ChoiceView(this.question.choices[i]);
    $question.find('.possible-answers').append(choiceView.render());
  }
  return $question;
}

var ChoiceView = function(choice) {
  this.choice = choice;
}

ChoiceView.prototype.render = function() {
  // etc.
  $choice.on('click', Controller.onAnswerClick);
}



<div id="templates">
  <h1 class="quiz"></h1>

  <div class="question">
    <h2 class="question-text"></h2>
    <ul class="possible-answers">
    </ul>
  </div>

  <li class="choice">  </li>
</div>
