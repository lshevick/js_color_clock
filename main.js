(function (){
// 1. create a time variable to use in further functions 
//2. create function to interact with the DOM and be able to
// 3. change the clock on the HTML page
// 4. console.log percentage of a minute that the current sec represent
const clockBar = document.querySelector('.clock-progress-bar'); 
const clockDisplay = document.querySelector('.clock-display');
const clockFace = document.querySelector('.clock-display');
const clock = document.querySelector('.clock');




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
    // console.log(time);
    
    // function to convert seconds of a minute to a percentage
    let percentSecs = Math.floor((seconds / 60) * 100);
    // console.log(percentSecs);
    
    //updates clock bar with percentage of seconds in a minute
    clockBar.style.width = percentSecs + '%';
    clockBar.style.transition = 'all 0.2s ease-in-out';


    // console.log() the time in hexidecimal format
    
    let hexHours = parseInt(hours * 255 / 23).toString(16);
    let hexMinutes = parseInt(minutes * 255 / 59).toString(16);
    let hexSecs = parseInt(seconds * 255 / 59).toString(16);


    let hexTime = `#${hexHours}${hexMinutes}${hexSecs}`;
    

    
    console.log(hexTime);
    
    clock.style.backgroundColor = hexTime;

    // hover over time shows Hex code
    clockDisplay.addEventListener('mouseover', function(e) {

        setTimeout(function() {
        e.target.style.backgroundColor = '';
        }, 500)
    })


}
updateTime(); // logs current time on page load & updates clock

// logs current time once every second
setInterval(function() {
    updateTime();
}, 1000);


})();