(function () {
    // 1. create a time variable to use in further functions 
    //2. create function to interact with the DOM and be able to
    // 3. change the clock on the HTML page
    // 4. console.log percentage of a minute that the current sec represent
    const clockBar = document.querySelector('.clock-progress-bar');
    const clockDisplay = document.querySelector('.clock-display');
    const clockFace = document.querySelector('.clock-display');
    const clock = document.querySelector('.clock');
    const docBody = document.querySelector('body');
    
    
    // gets current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;
    
    // console.log() the time in hexidecimal format
    let hexHours = parseInt(hours * 255 / 23).toString(16);
    let hexMinutes = parseInt(minutes * 255 / 59).toString(16);
    let hexSecs = parseInt(seconds * 255 / 59).toString(16);
    let hexTime = `#${hexHours}${hexMinutes}${hexSecs}`;
    
    // hovering over time shows current hex code
    const hovering = () => {
        clockDisplay.addEventListener('mousemove', function (e) {
            e.target.innerHTML = `${hexHours}:${hexMinutes}:${hexSecs}`;

        })
        clockDisplay.addEventListener('mouseover', function (e) {
            e.target.innerHTML = `${hexHours}:${hexMinutes}:${hexSecs}`;
        });
        clockDisplay.addEventListener('mouseout', function (e) {
            e.target.innerHTML = time;
        });
    }
    setInterval(function () {
        hovering();
    }, 1000);
    
    // function to convert seconds of a minute to a percentage
    const percentBar = () => {
        const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
        let percentSecs = Math.floor((seconds / 60) * 100);
        console.log(percentSecs);
        clockBar.style.width = percentSecs + '%';
        clockBar.style.transition = 'all 0.2s ease-in-out';
    };
    percentBar();
    setInterval(function () {
        percentBar();
    }, 1000);


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
        const time = `${hours}:${minutes}:${seconds}`;
        clockDisplay.innerHTML = time;
        
        if (hovering()) {
            clockDisplay.innerHTML = `${hexHours}:${hexMinutes}:${hexSecs}`;
        } else {
            clockDisplay.innerHTML = time;
        }

        console.log(time);
        console.log(hexTime);

        docBody.style.background = hexTime;
        clock.style.backgroundColor = hexTime;
        clock.style.transition = 'all 0.2s ease-in-out';
    }
    updateTime(); // logs current time on page load & updates clock
    // logs current time once every second
    setInterval(function () {
        updateTime();
    }, 1000);



})();