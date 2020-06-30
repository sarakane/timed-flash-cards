import { FlashCard } from './../src/flash-cards.js'

describe('FlashCard', () => {
  let reusableFlashCard;

  beforeEach(() => {
    reusableFlashCard = new FlashCard();
  });

  test('Should create a new FlashCard object', () => {
    expect(reusableFlashCard.questions).toEqual([{
      question: "What variable type is identified with square brackets?",
      answer: "a array",
      fakeAnswers: ["a object", "a string", "a booleon"]
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
    ]);
  });

  test('Should be able to get one question', () => {
    expect(reusableFlashCard.getCard(4)).toMatchObject({   
      question: "When was Javascript invented in it's very first itteration?",
      answers: ["1975", "1985", "1990", "1995"],
      correctAnswer: "1995"
    });
  });

  test('Should alphabetize answers', () => {
    expect(reusableFlashCard.getCard(0)).toMatchObject({   
      question: "What variable type is identified with square brackets?",
      answers: ["a array", "a booleon", "a object", "a string"],
      correctAnswer: "a array"
    });
  });
});