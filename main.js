(function (){
// 1. create a time variable to use in further functions 
//2. create function to interact with the DOM and be able to
// 3. change the clock on the HTML page
// 4. console.log percentage of a minute that the current sec represent
const clockBar = document.querySelector('.clock-progress-bar'); 
const clockDisplay = document.querySelector('.clock-display');
const clockFace = document.querySelector('.clock-display');

// const today = new Date();
// const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();


let updateTime = () => {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    const time = hours + ':' + minutes + ':' + seconds;
    clockDisplay.innerHTML = time;
    console.log(time);
}
updateTime(); // logs current time on page load & updates clock

// logs current time once every second
setInterval(function() {
    updateTime();
}, 1000);



})();