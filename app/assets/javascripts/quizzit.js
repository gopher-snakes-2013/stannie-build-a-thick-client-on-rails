
var Quiz = function(){
  function initialize(){
    grabQuiz()
  }

  function grabQuiz(){
    $.ajax({
      url: 'http://localhost:3000/quizzes.json',
      method:'get'
    }).done(function(data){
      $(".quiz-title").html(data.quizzes[0].name)
    })
  }

  function grabQuizQuestion(){
  }

  function giveSessionKey(){
  }

  function displayResults(){
    console.log ("you fail")
  }

  initialize()
}



DOMSetter = {
  createAnswerButtons: function(){
  },

  wipeDOM: function(){
    $(".container").remove()
  },

  createQuizTitle: function(){
    var quizElement = document.createElement('div')
    quizElement.className = 'quiz-title'
    document.body.appendChild(quizElement)
    // $("body").append(quizElement)
  }
}


$(document).ready(function(){
  DOMSetter.createQuizTitle()
  DOMSetter.wipeDOM()
  quiz = new Quiz()
})