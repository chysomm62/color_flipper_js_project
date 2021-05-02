const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#f33e66", "rgb(255,76,100)"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // get random number between 0 - 5
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    // style the background of body
    document.body.style.backgroundColor = colors[randomNumber];
    // change the default color texts on the page
    color.textContent = colors[randomNumber]

});

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
    // note that Math.floor() always rounds down to the nearest integer and not UP
    // for example Math.floor(3.9) will return 3 instead of 4 as in normal mathematics
}