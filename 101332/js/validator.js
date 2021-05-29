
const ANSWER_HASH = 'e904031b7aa499ed9801e40f1e8c7206d8dcbf1b';
const SUBMISSION  = 'https://airtable.com/shrRTqxXGYGtlkNFJ';
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



