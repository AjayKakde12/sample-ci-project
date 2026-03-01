document.addEventListener('DOMContentLoaded', () => {
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');

    const updateCounter = async (action) => {
        try {
            // Add a subtle loading state
            counterValue.style.opacity = '0.5';

            const response = await fetch(`/${action}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Animate number change
            counterValue.style.transform = 'scale(1.1)';
            counterValue.textContent = data.counter;

            setTimeout(() => {
                counterValue.style.transform = 'scale(1)';
                counterValue.style.opacity = '1';
            }, 100);

        } catch (error) {
            console.error(`Error performing ${action}:`, error);
            counterValue.style.opacity = '1';
        }
    };

    incrementBtn.addEventListener('click', () => updateCounter('increment'));
    decrementBtn.addEventListener('click', () => updateCounter('decrement'));
});
