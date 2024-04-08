//===== Type Effect
const dynamicText = document.querySelector(".home-content span")
const words = ["Web developer", "Software engineer"]
let wordsIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordsIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 50);
    } else if(isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 25);
    } else {
        isDeleting = !isDeleting;
        wordsIndex = !isDeleting ? (wordsIndex + 1) % words.length : wordsIndex;
        dynamicText.classList.remove("stop-blinking");
        setTimeout(typeEffect, 1100);
    }
}
typeEffect();