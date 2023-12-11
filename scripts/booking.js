/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
const monBtn = document.querySelector('#monday');
const tueBtn = document.querySelector('#tuesday');
const wedBtn = document.querySelector('#wednesday');
const thuBtn = document.querySelector('#thursday');
const friBtn = document.querySelector('#friday');
const fullBtn = document.querySelector('#full');
const halfBtn = document.querySelector('#half');
const clearDays = document.querySelector('#clear-button');
const costElement = document.querySelector('#calculated-cost');
let numDays = 0;
let dayBtns = [monBtn, tueBtn, wedBtn, thuBtn, friBtn];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
dayBtns.forEach(element => {
    element.addEventListener('click', () => {
        if (!element.classList.contains('clicked')) {
            element.classList.add('clicked');
            numDays++;
        } else {
            element.classList.remove('clicked');
            numDays--;
        }
        console.log(numDays);
        calculate(numDays, costPerDay);
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearDays.addEventListener('click', () => {
    dayBtns.forEach(function(element) {
        element.classList.remove('clicked');
    });
    numDays = 0;
    calculate(numDays, costPerDay);
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfBtn.addEventListener('click', () => {
    costPerDay = 20;
    halfBtn.classList.add('clicked');
    fullBtn.classList.remove('clicked');
    calculate(numDays, costPerDay);
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullBtn.addEventListener('click', () => {
    costPerDay = 35;
    fullBtn.classList.add('clicked');
    halfBtn.classList.remove('clicked');
    calculate(numDays, costPerDay);
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate(numDays, costPerDay) {
    let totalCost = numDays * costPerDay;
    costElement.innerHTML = totalCost;
}