const DATA = {
    whichSite: ['landing', 'multiPage', 'onlineStore'],
    price: [4000, 8000, 26000],
    desktopTemplates: [50, 40, 30],
    adapt: 20,
    mobileTemplates: 15,
    editable: 10,
    metrikaYandex: [500, 1000, 2000],
    analyticsGoogle: [850, 1350, 3000],
    sendOrder: 500,
    deadLine: [[2, 7], [3, 10], [7, 14]],
    deadLinePercent: [20, 17, 15]
};

const startButton = document.querySelector('.start-button');
const firstScreen = document.querySelector('.first-screen');
const mainForm = document.querySelector('.main-form');
const formCalculate = document.querySelector('.form-calculate');
const endButton = document.querySelector('.end-button');
const totalElem = document.querySelector('.total');
const fastRange = document.querySelector('.fast-range');
const totalPriceSum = document.querySelector('.total_price__sum');

const adapt = document.querySelector('#adapt');
const mobileTemplates = document.querySelector('#mobileTemplates');
mobileTemplates.disabled = true;

console.dir(totalElem);
function showElem(elem) {
    elem.style.display = 'block';
}

function hideElem(elem) {
    elem.style.display = 'none';
}

function priceCalculation(element) {
    let result = 0;
    let index = 0;
    let options = [];
    if (element.name === 'whichSite') {
        for (const item of formCalculate.elements) {
            if (item.type === 'checkbox') {
                item.checked = false;
            }
        }
        hideElem(fastRange);
    }
    for (const item of formCalculate.elements) {
        if (item.name === 'whichSite' && item.checked) {
            index = DATA.whichSite.indexOf(item.value);
        } else if (item.classList.contains('calc-handler') && item.checked) {
            options.push(item.value);
        }
    }
    options.forEach((key) => {
        if (typeof (DATA[key]) === 'number') {
            if (key === 'sendOrder') {
                result += DATA[key];
            } else {
                result += DATA.price[index] * DATA[key] / 100;
            }
        } else {
            if (key === 'desktopTemplates') {
                result += DATA.price[index] * DATA.desktopTemplates[index] / 100;
            } else {
                result += DATA[key][index];
            }
        }
    });
    result += DATA.price[index];
    totalPriceSum.textContent = result;
}

function handlerCallBackForm(event) {
    const target = event.target;
    if (adapt.checked) {
        mobileTemplates.disabled = false;
    } else {
        mobileTemplates.disabled = true;
    }
    if (target.classList.contains('want-faster')) {
        (target.checked) ? showElem(fastRange) : hideElem(fastRange);
    }
    if (target.classList.contains('calc-handler')) {
        priceCalculation(target);
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