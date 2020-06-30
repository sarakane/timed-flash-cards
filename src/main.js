import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from './user';

function showCard(user) {
  let card = user.cards.getCard(user.questionsIndex);
    $("#question").text(card.question);
    $("#answer1").text(card.answers[0]);
    $("#answer2").text(card.answers[1]);
    $("#answer3").text(card.answers[2]);
    $("#answer4").text(card.answers[3]);
}

$(document).ready(function() {
  let user;
  $("form#nameForm").submit(function(event){
    event.preventDefault();
    let inputtedName = $("name").val();
    user = new User(inputtedName);
    user.gameTimer();
    showCard(user);
    $("#hidden-current-score").show()

  });

  $("dt").click(function(event) {
    console.log(event);
    console.log(event.currentTarget.textContent);
    if (event.currentTarget.textContent === user.cards.getCard(user.questionsIndex).correctAnswer) {
      user.score++;
      console.log(user.score);
    }
    user.questionsIndex++;
    if (user.questionsIndex < user.cards.questions.length) {
    showCard(user);
    }

    $("#current-score").text(user.score);

    if (user.isAWinner === true){
      $("#hidden-win").show();
    }else if (user.isAWinner === false){
      $("#hidden-lose").show();
    }
  });
});
