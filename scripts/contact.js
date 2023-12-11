// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submitBtn = document.querySelector('#submit-button');
const main = document.querySelector('main');
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

submitBtn.addEventListener('click', () => {
    main.innerHTML = '<p style="font-size: 24px; margin-top: -275px;">Thank you for your message!</p>';
});