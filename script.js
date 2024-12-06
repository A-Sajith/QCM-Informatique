// Iniatialisation
let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question'); 
const nextButton = document.getElementById('next-button'); 
const startButton = document.getElementById('start-button'); 

// Fonction pour démarrer le QCM
function commencer() {
    startButton.style.display = 'none'; 
    document.getElementById('qcm').style.display = 'block'; // Afficher les questions
    afficherQuestion(currentQuestionIndex); 
}

// Fonction pour afficher une question
function afficherQuestion(index) {
    questions[index].classList.add('active'); 
}

// Vérifier la réponse
function verifierReponse(button, isCorrect) {
    if (isCorrect) {
        button.style.backgroundColor = 'green';
        alert('Bonne réponse !')
    } else {
        button.style.backgroundColor = 'red'; 
        alert('Mauvaise réponse !')
    }

    // Afficher le bouton "Suivant"
    nextButton.style.display = 'inline-block';
}

// Passer à la question suivante
function suivant() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        afficherQuestion(currentQuestionIndex); // Afficher la nouvelle question
        nextButton.style.display = 'none'; 
    } else {
        document.getElementById('qcm').innerHTML = "<h2>QCM terminé !</h2>";
        nextButton.style.display = 'none';
    }
}
