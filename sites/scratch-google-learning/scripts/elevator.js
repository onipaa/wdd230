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
        const elevatorPitch = document.createElement('p');
        elevatorPitch.textContent = 'Find out how to join our chamber of commerce. You don\'t know the power of the the Dark Side.';

        const elevatorJoin = document.createElement('input');
        elevatorJoin.type = 'button';
        elevatorJoin.value = 'Join Us or Die!';

        const elevatorPitchContainer = document.getElementById('elevatorPitch');
        elevatorPitchContainer.appendChild(elevatorPitch);
        elevatorPitchContainer.appendChild(elevatorJoin);
    }
}
