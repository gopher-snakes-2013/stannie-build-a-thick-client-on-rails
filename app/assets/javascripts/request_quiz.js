var Session = {
  reset: function() {
    this.key = (new Date()).toString();
  }
};

var getQuizzes = function(){
$.ajax({
  url: 'quizzes.json'
}).done(function(response){
  Views.addAllQuizzes(response)
})
}

var Views = {
 addQuiz: function (quiz){
    var quizTemplate = $('#templates > .quiz').clone()
    quizTemplate.html("<a href='#' data-quiz_id='" + quiz.quiz_id +"'>" + quiz.name + "</a>")
    $(quizTemplate).on("click", "a", function(){
      event.preventDefault();
      Views.hideQuizMenuErrors()
      getQuestion($(this).data("quiz_id"))
    })
    $('#listOfQuizzes').append(quizTemplate)
  },
  addAllQuizzes: function  (response){
    for(var i=0; i< response.quizzes.length;i++){
      this.addQuiz(response.quizzes[i]);
    }
  },
  hideQuizMenuErrors: function(){
      $('#listOfQuizzes').addClass('hidden')
      $('#error').addClass("hidden")
      $('#correct').hide()
  }
}

var getQuestion = function(quiz_id){
$.ajax({
  url: "quizzes/" + quiz_id + "/questions/next.json",
  data: { session_key: Session.key }
}).done(function(response){
  Session.correct = response
  showQuestion(response)
}).error(function(response){
  $('#listOfQuizzes').removeClass('hidden')
  really = response.responseText
  $('#error').html($.parseJSON(response.responseText).message).removeClass("hidden")
})
}

var showQuestion = function(getQuestionResponse){
  $('#question').empty()
  // $('#error').addClass("hidden")
  var questionTemplate = $('#templates > .question').clone()
  questionTemplate.html(getQuestionResponse.question.question)
  $('#question').append(questionTemplate)
  addAllChoices(getQuestionResponse.question.choices)
  }



var submitAnswer = function(choice){
$.ajax({
  url: "questions/"+ choice.question_id +"/answers.json",
type: 'post',
  data: { session_key: Session.key, choice_id: choice.choice_id }
}).done(function(response){
  if(response.status.more_questions){
      getQuestion(response.status.quiz_id)
  } else {
    var totalAnswered = response.status.num_correct + response.status.num_incorrect
    $('#correct').html(response.status.num_correct + " out of " + totalAnswered + " correct!")
    $('#correct').show()
    $('#question').empty()
    $('#listOfQuizzes').removeClass('hidden')
  }
})
}

var createChoice = function(choice){
  var choice_button = document.createElement('button')
  $(choice_button).data("choice_id",choice.choice_id)
  $(choice_button).data("question_id",choice.question_id)
  $(choice_button).data("quiz_id",choice.quiz_id)
  $(choice_button).html(choice.choice)
  $('#question').append(choice_button)
}

var addAllChoices = function(choices){
  // for(var i=0; i< choices.length; i++){
  for(var i in choices){
    createChoice(choices[i])
  }
}

$(document).ready(function(){
  getQuizzes();
  $('#question').on("click", "button", function(){
    console.log("choice_id:",$(this).data())
    submitAnswer($(this).data())})
  Session.reset();
})