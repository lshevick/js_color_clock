(function (){
// 1. create a time variable to use in further functions 
//2. create function to interact with the DOM and be able to
// 3. change the clock on the HTML page
const clockBar = document.querySelector('.clock-progress-bar'); 
const clockDisplay = document.querySelector('.clock-display');
const clockFace = document.querySelector('.clock-display');

const today = new Date();
const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();


let updateTime = () => {
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    clockDisplay.innerHTML = time;
    console.log(time);
}
updateTime(); // logs current time on page load & updates clock

// logs current time once every second
setInterval(function() {
    updateTime();
}, 1000);



})();