// Setup game loop.
// This runs over and over and over again, infinitely.
function main(currentTimestamp) {
    window.requestAnimationFrame(main);
    console.log('Timestamp', currentTimestamp);
}

window.requestAnimationFrame(main);
