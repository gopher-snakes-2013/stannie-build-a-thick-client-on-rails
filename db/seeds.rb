# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

quiz = Quiz.create(name: "Dev Bootcamp Questions")

question1 = quiz.questions.create(question: "Who is your favorite teacher?")
question1.choices.create(choice: "Matt", is_correct: false)
question1.choices.create(choice: "Strand", is_correct: false)
question1.choices.create(choice: "Jeffrey", is_correct: false)
question1.choices.create(choice: "None of the Above", is_correct: true)

question2 = quiz.questions.create(question: "Is Javascript awesome?")
question2.choices.create(choice: "Yes", is_correct: true)
question2.choices.create(choice: "No", is_correct: false)

quiz2 = Quiz.create(name: "All about Topher")

question3 = quiz2.questions.create(question: "What is Topher's favorite color?")
question3.choices.create(choice: "Yellow", is_correct: false)
question3.choices.create(choice: "Purple", is_correct: true)
question3.choices.create(choice: "Blue", is_correct: false)
question3.choices.create(choice: "Silver", is_correct: false)

question4 = quiz2.questions.create(question: "When did Topher first eat ice cream?")
question4.choices.create(choice: "a year ago", is_correct: false)
question4.choices.create(choice: "day he was born", is_correct: false)
question4.choices.create(choice: "when he was 4", is_correct: false)
question4.choices.create(choice: "when he was 2", is_correct: true)
