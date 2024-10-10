document.addEventListener('DOMContentLoaded', (event) => {
    let clickCount = 0;
    let isCountingActive = true;
    
    const myButton = document.getElementById('myButton');
    const clickCountElement = document.getElementById('clickCount');
    const deactivateButton = document.getElementById('deactivate');
    
    myButton.addEventListener('click', () => {
        if (isCountingActive) {
            clickCount++;
            clickCountElement.textContent = clickCount;
        }
    });

    deactivateButton.addEventListener('click', () => {
        isCountingActive = !isCountingActive;
        deactivateButton.textContent = isCountingActive ? 'Deactivate counting' : 'Reactivate counting';
    });
});