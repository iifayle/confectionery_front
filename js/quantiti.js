document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.querySelector(".butcarzin");
    const counterContainer = document.getElementById("cart-counter-container");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const countDisplay = document.getElementById("count");
    
    let count = 1;

    cartButton.addEventListener("click", () => {
        counterContainer.style.display = "flex"; // Показываем счётчик
    });

    incrementButton.addEventListener("click", () => {
        if(count<20){
        count++;
        countDisplay.textContent = count;
        }
    });

    decrementButton.addEventListener("click", () => {
        if (count > 0) {
            count--;
            countDisplay.textContent = count;
        }
    });
});
