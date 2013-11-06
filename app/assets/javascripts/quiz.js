$(document).ready(function(){
  // console.log("waddup steven, i'm glad we're pairing :-)")
  $.ajax({
    url: '/quizzes.json',
    type: 'get',
  })
  .done(function(response){
    var quiz = response
    $('#quiz-name').html(quiz.quizzes[0].name)
    $('.question').html(firstQuestion());
  })
});

var our_session_key = Math.random()*10000000000000000000000000000;

var firstQuestion = function(){
 $.ajax({
    url:'/quizzes/1/questions/next.json',
    type: 'get',
    data: {session_key: our_session_key}
 })
 .done(function(response){
  fillQuestion(response);
  });
}

var fillQuestion = function(response){
  var question = response.question.question;
  var choices = response.question.choices;
  $('h2').html(question);

  // creates choice bullet points with individual data-choice-ids
  for (var i = 1; i < choices.length; i++){
    $(".options[data-choice-id='1']").clone().attr("data-choice-id", i+1).appendTo('.possible-answers');
  }

  for (var i = 0; i <choices.length; i++){
    var child = i + 1
    $('ul > li:nth-child('+ child +')').html(choices[i].choice);
  }

 }