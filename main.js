(function () {
'use strict';

    // 1. create a time variable to use in further functions 
    //2. create function to interact with the DOM and be able to
    // 3. change the clock on the HTML page
    // 4. console.log percentage of a minute that the current sec represent
    const clockBar = document.querySelector('.clock-progress-bar');
    const clockDisplay = document.querySelector('.clock-display');
    const clock = document.querySelector('.clock');
    const docBody = document.querySelector('body');

    let isHovering = false;

    // gets current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;

    // function to convert seconds of a minute to a percentage
    const percentBar = () => {
        const now = new Date();
        let seconds = now.getSeconds();
        let percentSecs = Math.floor((seconds / 60) * 100);
        // console.log(percentSecs);
        clockBar.style.width = percentSecs + '%';
        clockBar.style.transition = 'all 0.2s ease-in-out';
    };
    setInterval(function () {
        percentBar();
    }, 1000);
    percentBar();

    // const hovering = () => {
    //     const now = new Date();
    //     let hours = now.getHours();
    //     let minutes = now.getMinutes();
    //     let seconds = now.getSeconds();
    //     let hexHours = parseInt(hours * 255 / 23).toString(16);
    //     let hexMinutes = parseInt(minutes * 255 / 59).toString(16);
    //     let hexSecs = parseInt(seconds * 255 / 59).toString(16);

    //     clockDisplay.addEventListener('mousemove', function (e) {
    //         e.target.innerHTML = `${hexHours}:${hexMinutes}:${hexSecs}`;
    //     })
    //     clockDisplay.addEventListener('mouseover', function (e) {
    //         e.target.innerHTML = `${hexHours}:${hexMinutes}:${hexSecs}`;
    //     });
    //     clockDisplay.addEventListener('mouseout', function (e) {
    //         e.target.innerHTML = time;
    //     });
    // }
    // setInterval(function () {
    //     hovering();
    // }, 1000);
    // hovering();

    clockDisplay.addEventListener('mouseover', () => isHovering = true);
    clockDisplay.addEventListener('mouseout', () => isHovering = false);

    let updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        
        const time = `${hours}:${minutes}:${seconds}`;
        clockDisplay.innerHTML = time;

        let hexHours = parseInt(hours * 255 / 23).toString(16);
        let hexMinutes = parseInt(minutes * 255 / 59).toString(16);
        let hexSecs = parseInt(seconds * 255 / 59).toString(16);
        let hexTime = `#${hexHours}${hexMinutes}${hexSecs}`;
        
        console.log(time);
        console.log(hexTime);
        
        if (isHovering) {
            clockDisplay.innerHTML = `${hexHours}:${hexMinutes}:${hexSecs}`;
        } else {
            clockDisplay.innerHTML = time;
        }

        docBody.style.background = hexTime;
        clock.style.backgroundColor = hexTime;
        clock.style.transition = 'all 0.2s ease-in-out';

        // logs current time once every second
    }
    setInterval(function () {
        updateTime();
    }, 1000);
    updateTime(); // logs current time on page load & updates clock
    
    document.addEventListener('click', function () {
        let armed = window.getComputedStyle(document.querySelector('.clock-display')).getPropertyValue('border-top-style');
        
        if (armed === 'hidden') {
            console.log('hey');
            clockDisplay.innerHTML = `${hexHours}:${hexMinutes}:${hexSecs}`;
        } else {
            clockDisplay.innerHTML = time;
        }
    }, false);


})();``