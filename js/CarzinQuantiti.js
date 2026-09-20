const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const countSpan = document.getElementById('count');
const removeBtn = document.getElementById('remove-button');

let count = 1;

// Обновляем отображение счётчика
function updateCounter() {
    countSpan.textContent = count;
}

// Уменьшение
decrementBtn.addEventListener('click', () => {
    if (count > 1) {
        count--;
        updateCounter();
    }
});

// Увеличение
incrementBtn.addEventListener('click', () => {
    if (count < 20) {
        count++;
        updateCounter();
    }
});

// Удаление (сброс в 0)
removeBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});