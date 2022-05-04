(function (){
// 1. create a time variable to use in further functions 
//2. create function to interact with the DOM and be able to
// 3. change the clock on the HTML page
// 4. console.log percentage of a minute that the current sec represent
const clockBar = document.querySelector('.clock-progress-bar'); 
const clockDisplay = document.querySelector('.clock-display');
const clockFace = document.querySelector('.clock-display');




let updateTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    const time = hours + ':' + minutes + ':' + seconds;
    clockDisplay.innerHTML = time;
    console.log(time);
    
    // function to convert seconds of a minute to a percentage
    let percentSecs = Math.floor((seconds / 60) * 100);
    console.log(percentSecs);
}
updateTime(); // logs current time on page load & updates clock

// logs current time once every second
setInterval(function() {
    updateTime();
}, 1000);


})();