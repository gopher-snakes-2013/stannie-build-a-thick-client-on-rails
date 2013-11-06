$(document).ready(function(){
  // console.log("waddup steven, i'm glad we're pairing :-)")
  $.ajax({
    url: '/quizzes.json',
    type: 'get',
  })
  .done(function(response){
    console.log("done!");
    console.log(response);
    var quiz = response
    $('#quiz-name').html(quiz.quizzes[0].name)
    $('.question').html(firstQuestion());
  })
});

var our_session_key = Math.random()*10000000000000000000000000000;
// console.log(our_session_key);

var firstQuestion = function(){
 $.ajax({
    url:'/quizzes/1/questions/next.json',
    type: 'get',
    data: {session_key: our_session_key}
 })
 .done(function(response){
  var question = response.question.question;
  var choices = response.question.choices;
  $('h2').html(question);
  console.log(choices);

  for (var i = 1; i < choices.length; i++){
    $(".options[data-choice-id='1']").clone().attr("data-choice-id", i+1).appendTo('.possible-answers');
  }

  // $('ul > li:nth-child(1)').html(response.question.choices[0].choice);
  // debugger;

 })
}