// A event load page with quizzes

// B click on a quiz
//  --ajax call to grab quiz

// C click on an anwer
// -- ajax call to submit answer
//    --if correct, B

var Quiz = function(){
  this.initialize()
}

Quiz.prototype = {

  initialize: function(){
    this.grabQuiz()
    this.bindEventListeners()
    this.session_key = this.generateSessionKey();
  },

  grabQuiz: function(){
    $.ajax({
      url: 'http://localhost:3000/quizzes.json',
      method:'get'
    }).done(function(data){
      $(".quiz-title").html(data.quizzes[0].name)
    })
  },

  bindEventListeners: function(){
    var self = this;
    $("body").on('click', ".quiz-title", function() { self.grabQuizQuestion() })
    $("body").on('click', ".choices", function() { self.submitAnswer() } )
  },

  submitAnswer: function(){
    var submittedData = event.toElement.id
    var self = this;
    $.ajax({
      url: 'http://localhost:3000/questions/1/answers.json',
      type: 'post',
      data: { session_key: self.session_key, choice_id: event.toElement.id},
      dataType: 'json'
    }).done(function(data){
      DOMSetter.wipeDOM()
      self.grabQuizQuestion()
    })
  },

  grabQuizQuestion: function(){
    var self = this;
    $.ajax({
      url: '/quizzes/1/questions/next.json',
      method:'get',
      data: { session_key: self.session_key },
      dataType: "json"
    }).done(function(data){
      questionChoices = Quiz.prototype.parseQuestionChoices(data)
      questionQuestion = Quiz.prototype.parseQuizQuestion(data)

      DOMSetter.appendDiv(questionQuestion, "question")
      DOMSetter.appendChoicesToDOM(questionChoices)
    })
  },

  generateSessionKey: function(){
    var randNum = Math.floor(Math.random()*(10000)+100000)
    hexNum = randNum.toString(16)
    return hexNum
  },

  parseQuizQuestion: function(quizQuestionData){
    return quizQuestionData.question.question
  },

  parseQuestionChoices: function(quizQuestionData){
    return quizQuestionData.question.choices
  }
}


DOMSetter = {
  appendChoicesToDOM: function(questionArray){
    for (var i=0; i<questionArray.length; i++){
      DOMSetter.appendDiv(questionArray[i].choice, "choices", questionArray[i].choice_id)
    }
  },

  wipeDOM: function(){
    $("body").empty()
    DOMSetter.appendDiv('quiz title', 'quiz-title')
    Quiz.prototype.grabQuiz()
  },

  appendDiv: function(element, className, id){
    var divToAppend = document.createElement('div')
    divToAppend.id = id
    divToAppend.className = (className)
    document.body.appendChild(divToAppend)
    $(divToAppend).html(element)
  }
}


$(document).ready(function(){
  DOMSetter.appendDiv('quiz title', 'quiz-title')
  quiz = new Quiz()
})