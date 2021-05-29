
const ANSWER_HASH = 'f38b29ee6a310c7a9f840db1d44a5571df613aec';
const SUBMISSION  = 'https://airtable.com/shresqPf2C6gsy3R5';
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



