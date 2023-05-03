let lastRenderTime = 0;
const SNAKE_SPEED = 2;

// Setup game loop.
// This runs over and over and over again, infinitely.
function main(currentTimestamp) {
    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTimestamp - lastRenderTime) / 1000;

    if (secondsSinceLastRender < (1 / SNAKE_SPEED)) {
        return;
    }

    console.log('Render');

    lastRenderTime = currentTimestamp;
}

window.requestAnimationFrame(main);
