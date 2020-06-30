import { FlashCard } from './flash-cards.js';

export class User {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.isAWinner;
    this.cards = new FlashCard();
  }

  gameTimer(){
    setTimeout(() => {
      if(this.score === 6){
        this.isAWinner = true;
      } else {
        this.isAWinner = false;
      }
    }, 300000)
  }
}
