
const ANSWER_HASH = 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3';
const SUBMISSION  = 'https://www.google.com';
const checkButton = document.querySelector('#check');
const answerInput = document.querySelector('#answer');
const message     = document.querySelector('#message');

checkButton.addEventListener('click', function () {
    const answer = answerInput.value;
    if(sha1(answer) == ANSWER_HASH) {
        message.classList.remove('text-red-600');
        message.classList.add('text-green-600');
        message.textContent = 'Correct Answer!';
        window.open(SUBMISSION);
    } else {
        message.classList.remove('text-gray-600');
        message.classList.add('text-red-600');
        message.textContent = 'Invalid Answer!';
    }
})



