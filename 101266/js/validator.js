
const ANSWER_HASH = 'dcc9762064a59a0d05764ce7ae3d4043b983eba8';
const SUBMISSION  = 'https://airtable.com/shrUhse3Qj6Eqa6RK';
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



