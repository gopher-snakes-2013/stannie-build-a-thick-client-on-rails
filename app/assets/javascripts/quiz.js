// $(document).ready(function(){
//   topherToggle();

//   $.ajax({
//     url: '/quizzes.json',
//     type: 'get',
//   })
//   .done(function(response){
//     $('.container').append('<h1 id="quiz-name"></h1>');
//     console.log(response)
//     var quiz = response
//     $('#quiz-name').html(quiz.quizzes[0].name)
//     $('.question').html(firstQuestion());
//   })
// });

// var our_session_key = Math.random()*10000000000000000000000000000;

// var firstQuestion = function(){
//  $.ajax({
//     url:'/quizzes/1/questions/next.json',
//     type: 'get',
//     data: {session_key: our_session_key}
//  })
//  .done(function(response){
//   fillQuestion(response);
//   });
// }

// var fillQuestion = function(response){
//   var question = response.question.question;
//   var choices = response.question.choices;
//   $('h2').html(question);



// // <li class='options' data-choice-id='1'><a href="#"></a></li>



//   // creates choice bullet points with individual data-choice-ids
//   for (var i = 1; i < choices.length; i++){
//     var choiceId = choices[i-1].choice_id;
//     alert(choiceId);
//     $(".options[data-choice-id='1']").clone().attr("data-choice-id", choiceId).appendTo('.possible-answers');
//   }





//   for (var i = 0; i <choices.length; i++){
//     var child = i + 1
//     var $answerLink = $('ul > li:nth-child('+ child +') a')
//     $answerLink.attr("id", i+1)
//     $answerLink.html(choices[i].choice)
//   }
//     clickAnswer();
// }


// var clickAnswer = function(){
//   $('#1').on("click", function(){
//     console.log("clicked!!!!! 1")
//     console.log(this);
//   })

//   $('#2').on("click", function(){
//     console.log("clicked!!!!! 2")
//     console.log(this);
//   })

//   $('#3').on("click", function(){
//     console.log("clicked!!!!! 3")
//   })

//   $('#4').on("click", function(){
//     console.log("clicked!!!!! 4")
//   })
// }


// var topherToggle = function(){
//   $('#quiz-name').on('click', function(){
//     $('h3').toggle("pulsate")
//   })
// }
