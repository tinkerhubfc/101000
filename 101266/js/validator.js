
const ANSWER_HASH = '5514def53ef94dd1e60df8ea674e7324485b3bde';
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

console.log(sha1('NODEJS'))

