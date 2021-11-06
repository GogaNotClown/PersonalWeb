let secretCount = 0;
let secretArray = [
    "Ну и нахуй ты нажал",
    "Боже чел ты",
    "Ты до сих пор тут?",
    "Лааааадно",
    "Проблемы с сайтом?",
    "Иди нахуй ;)"
];

function secretFunction() {
    if (secretCount > 5) return;
    $('#secretCredit')[0].innerHTML = decodeURI(secretArray[secretCount]);
    secretCount++;
}