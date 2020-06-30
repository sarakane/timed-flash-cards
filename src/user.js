import { FlashCard } from './flash-cards.js';

export class User {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.isAWinner;
    this.cards = new FlashCard();
    this.questionsIndex = 0;
  }

  gameTimer(){
    setTimeout(() => {
      if(this.score === 5){
        this.isAWinner = true;
      } else {
        this.isAWinner = false;
      }
    }, 5000);
  }


}
