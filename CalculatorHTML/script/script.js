const startButton = document.querySelector('.start-button');
const firstScreen = document.querySelector('.first-screen');
const mainForm = document.querySelector('.main-form');

const formCalculate = document.querySelector('.form-calculate');
const endButton = document.querySelector('.end-button');
const totalElem = document.querySelector('.total');
const fastRange = document.querySelector('.fast-range');
console.dir(totalElem);
function showElem(elem) {
    elem.style.display = 'block';
}

function hideElem(elem) {
    elem.style.display = 'none';
}

function handlerCallBackForm(event) {
    const target = event.target;
    if (target.classList.contains('want-faster')) {
        (target.checked) ? showElem(fastRange) : hideElem(fastRange);
    }
}

startButton.addEventListener('click', () => {
    showElem(mainForm);
    hideElem(firstScreen);
});

endButton.addEventListener('click', () => {
    for (let count of formCalculate.elements) {
        if (count.tagName === 'FIELDSET') {
            hideElem(count);
        }
    }
    showElem(totalElem);
});

formCalculate.addEventListener('change', handlerCallBackForm);








/*

defer// используется если скрипты подключены в head
console.dir()//выводит элемент как объект соответсвенно можно глянуть все свойства

*/