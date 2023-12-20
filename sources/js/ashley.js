let startTime, endTime;

function startTest() {
    // Get the text to be typed
    const quoteText = document.getElementById('quote-text').innerText;

    // Display the quote text in the textarea
    document.getElementById('user-input').value = quoteText;

    // Enable the textarea
    document.getElementById('user-input').removeAttribute('disabled');

    // Set focus to the textarea
    document.getElementById('user-input').focus();

    // Display the start time
    startTime = new Date().getTime();

    // Change the Start Test button to Reset
    const startBtn = document.getElementById('start-btn');
    startBtn.innerText = 'Reset';
    startBtn.onclick = resetTest;

    // Clear previous result
    document.getElementById('result').innerText = '';
}

function resetTest() {
    // Clear the textarea
    document.getElementById('user-input').value = '';

    // Disable the textarea
    document.getElementById('user-input').setAttribute('disabled', 'true');

    // Change the Reset button to Start Test
    const startBtn = document.getElementById('start-btn');
    startBtn.innerText = 'Start Test';
    startBtn.onclick = startTest;

    // Display the result
    const resultTime = calculateTime();
    const result = `Your typing speed: ${resultTime} seconds.`;
    document.getElementById('result').innerText = result;
}

function calculateTime() {
    // Display the end time
    endTime = new Date().getTime();

    // Calculate the time difference in seconds
    const totalTime = (endTime - startTime) / 1000;

    return totalTime.toFixed(2);
}
