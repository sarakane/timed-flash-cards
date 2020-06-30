import { FlashCard } from './../src/flash-cards.js'

describe('FlashCard', () => {
  let reusableFlashCard;

  beforeEach(() => {
    reusableFlashCard = new FlashCard();
  })
  test('Should create a new FlashCard object', () => {
    expect(reusableFlashCard).toMatchObject({card1: {
      question: "What variable type is identified with squar brackets?",
      answer: "an array",
      fakeAnswers: ["an object", "a string", "a booleon"]
    },
    card2: {
      question: "How many values can an object contain?",
      answer: "infinite",
      fakeAnswers: ["100", "25,000", "1,000,000"]
    },
    card3: {
      question: "How many values can an object contain?",
      answer: "4,294,967,295",
      fakeAnswers: ["100", "25,000", "1,000,000"]
    },
    card4: {
      question: "What is Sara's color?",
      answer: "purple",
      fakeAnswers: ["red", "green", "blue"]
    },
    card5: {
      question: "When was Javascript invented in it's very first itteration?",
      answer: "1995",
      fakeAnswers: ["1975", "1985", "1990"]
    }
  });
  });

});