const flashcardsContainer = document.getElementById('flashcards-container');
const addFlashcardBtn = document.getElementById('add-flashcard-btn');
const flashcardFormContainer = document.getElementById('flashcard-form-container');
const flashcardForm = document.getElementById('flashcard-form');


const fixedFlashcards = [
  { question: "O que é HTML?", answer: "É uma linguagem de marcação usada para estruturar conteúdo na web." },
  { question: "O que é CSS?", answer: "É uma linguagem de estilo usada para definir a aparência de páginas web." },
  { question: "O que é JavaScript?", answer: "É uma linguagem de programação usada para criar interatividade em páginas web." },
  { question: "O que é o DOM?", answer: "É a interface de programação para documentos HTML e XML." },
  { question: "O que é Python?", answer: "É uma linguagem de programação de alto nível conhecida por sua simplicidade e legibilidade." },
  { question: "Para que serve o Git?", answer: "É um sistema de controle de versões usado para gerenciar projetos de código." },
];


function initializeFlashcards() {

  const savedFlashcards = JSON.parse(localStorage.getItem('flashcards')) || [];


  if (!localStorage.getItem('flashcardsInitialized')) {
    fixedFlashcards.forEach(flashcard => savedFlashcards.push(flashcard));
    localStorage.setItem('flashcards', JSON.stringify(savedFlashcards));
    localStorage.setItem('flashcardsInitialized', true);
  }


  savedFlashcards.forEach(({ question, answer }) => addFlashcard(question, answer));
}

function addFlashcard(question, answer) {
  const flashcard = document.createElement('div');
  flashcard.classList.add('flashcard');

  flashcard.innerHTML = `
    <div class="flashcard-inner">
      <div class="flashcard-front">${question}</div>
      <div class="flashcard-back">${answer}</div>
    </div>
  `;

  flashcardsContainer.appendChild(flashcard);
}


function saveFlashcardToLocalStorage(question, answer) {
  const savedFlashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
  savedFlashcards.push({ question, answer });
  localStorage.setItem('flashcards', JSON.stringify(savedFlashcards));
}


addFlashcardBtn.addEventListener('click', () => {
  flashcardFormContainer.style.display = 'flex';
});

flashcardForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const question = document.getElementById('question').value;
  const answer = document.getElementById('answer').value;

  addFlashcard(question, answer);
  saveFlashcardToLocalStorage(question, answer);

  flashcardForm.reset();
  flashcardFormContainer.style.display = 'none';
});


initializeFlashcards();
