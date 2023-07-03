window.addEventListener('DOMContentLoaded', function() {
    checkBrowserWidth();

    this.window.addEventListener('resize', checkBrowserWidth);
})

function checkBrowserWidth() {
    const browserWidth = window.innerWidth;

    // This is hinky... I only want the elevator pitch when the size of the 
    // browser is 1000px. I think they are testing my ability to innovate
    // because one would not have stuff on one page that is not on the other
    // if one wants to make sure they communicate properly.
    
    if (browserWidth >= 1000) {

        document.getElementById('elevator').innerHTML = `
            <p>Luke, you do not yet realize your importance. You have only begun to discover your power. Join me, and I will complete your training. With our combined strength, we can end this destructive conflict and bring order to the galaxy. If you only knew the power of the Dark Side.</p>
            <p><strong>Find out how to join our chamber of commerce.</strong></p>
            <input type="button" value="Join Us or Die!">
        `;

        console.log ('Help Me Obi Wan.');
    }
}
