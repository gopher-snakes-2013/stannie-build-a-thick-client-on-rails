$(document).ready(function(){
  console.log('I loaded!');
  $('.container').append('<h1>Welcome to Stannie\'s quiz hub!</h1>');
  QuizController.getQuizzes();
  $('.container').on('click', 'h2 a', function() {
    debugger
  })
})

function Quiz(id, name){
  this.id = id;
  this.name = name;
}

function Question(){

}

function Choice(){

}

var Quiz = {
  url: '/quizzes',
  get: function(id) {
    var self = this;
    $.ajax({
      url: this.url + id + '.json',
      type: 'get'
    }).done(function(data) {
      if(callback) callback(data);
    })
  },

  all: function(callback) {
    $.ajax({
      url: this.url + id + '.json',
      type: 'get'
    }).done(function(data) {
      if(callback) callback(data)
    })
  }
}


var QuizController = {
  getQuizzes: function(){
    Quiz.all(function(data) {
      QuizController.createQuizzes(response.quizzes);
      QuizController.appendQuizzes(response.quizzes);
    })
  },

  createQuizzes: function(allQuizzes){
    for(var i = 0; i < allQuizzes.length; i++){
      var quiz_id = allQuizzes[i].quiz_id;
      var quiz_name = allQuizzes[i].name;
      window["quiz" + (i + 1)] = new Quiz(quiz_id, quiz_name);
      QuizController.appendQuizzes(window["quiz" + (i + 1)])
    }
  },

  appendQuizzes: function(allQuizzes){
    for(var i = 0; i < allQuizzes.length; i++){
      var quizName = window["quiz" + (i + 1)].name;
      $('.container').append('<h2><a href="#">' + quizName + '</a></h2>');
    }
    QuestionController.getQuestion();
  },
}

var QuestionController = {
  getQuestion: function(){
    debugger;
  }
}

