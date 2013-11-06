
var Quiz = function(){
  this.initialize()
}

Quiz.prototype = {

  initialize: function(){
    this.grabQuiz()
    this.bindEventListeners()
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
    var self = this
    $(".quiz-title").on('click', this.grabQuizQuestion)
  },

  grabQuizQuestion: function(){
    $.ajax({
      url: 'http://localhost:3000//quizzes/1/questions/next.json',
      method:'get',
      data: { session_key: Quiz.prototype.generateSessionKey() },
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
  },

  displayResults: function(){
    console.log ("you fail")
  }
}


DOMSetter = {
  createAnswerButtons: function(){
  },

  appendChoicesToDOM: function(questionArray){
    for (var i=0; i<questionArray.length; i++){
      DOMSetter.appendDiv(questionArray[i].choice, "choices")
    }
  },

  wipeDOM: function(){
    $(".container").remove()
  },

  appendDiv: function(element, className){
    var divToAppend = document.createElement('div')
    divToAppend.className = (className)
    document.body.appendChild(divToAppend)
    $(divToAppend).html(element)
  }
}


$(document).ready(function(){
  DOMSetter.appendDiv('quiz-title', 'quiz-title')
  DOMSetter.wipeDOM()
  quiz = new Quiz()
})