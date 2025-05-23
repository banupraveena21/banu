const flashcards = [
    { question: "10+5?", answer: "15" },
    { question: "What is the capital of TamilNadu", answer: "chennai" },
    { question: "What is the square root of 16?", answer: "4" }
  ];
  
  let currentCardIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const submitButton = document.getElementById("submit");
  const scoreElement = document.getElementById("score");
  const resultElement = document.getElementById("result");
  
  function displayCard() {
    questionElement.textContent = flashcards[currentCardIndex].question;
    answerInput.value = "";
    resultElement.textContent = "";
  }
  
  function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = flashcards[currentCardIndex].answer;
  
    if (userAnswer === correctAnswer) {
      score++;
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
    }
  
    scoreElement.textContent = `Score: ${score}`;
    currentCardIndex++;
  
    if (currentCardIndex < flashcards.length) {
      displayCard();
    } else {
       questionElement.textContent = "Quiz complete!";
       answerInput.style.display = "none";
       submitButton.style.display = "none";
    }
  }
  
  submitButton.addEventListener("click", checkAnswer);
  displayCard();