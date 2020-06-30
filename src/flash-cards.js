export class FlashCard {
  constructor() {
    this.questions = [
        {
        question: "What variable type is identified with square brackets?",
        answer: "an array",
        fakeAnswers: ["an object", "a string", "a booleon"]
      },
      {
        question: "How many values can an object contain?",
        answer: "infinite",
        fakeAnswers: ["100", "25,000", "1,000,000"]
      },
      {
        question: "How many values can an object contain?",
        answer: "4,294,967,295",
        fakeAnswers: ["100", "25,000", "1,000,000"]
      },
      {
        question: "What is Sara's color?",
        answer: "purple",
        fakeAnswers: ["red", "green", "blue"]
      },
      {
        question: "When was Javascript invented in it's very first itteration?",
        answer: "1995",
        fakeAnswers: ["1975", "1985", "1990"]
      }
    ];
  }

  getCard(cardNumber){
    let returnObj = {};
    returnObj.question = this.questions[cardNumber].question;
    returnObj.answers = this.questions[cardNumber].fakeAnswers;
    returnObj.answers[returnObj.answers.length] = this.questions[cardNumber].answer;
    returnObj.answers.sort();
    returnObj.correctAnswer = this.questions[cardNumber].answer;
    return returnObj;
  }


  /* 
    displayQuestions(){
      setInterval(() => {
        $('#span-id').show(this.card1.question)
      }20000);
    if (this.card1.answer === our user's click){
      clearInterval()
      User.score ++,
    } else (this.card1.answer !== our user's click){
        setInterval(() => {
        $('#span-id').show(this.card2.question)
      }20000);
    }
  }
  */
  
}