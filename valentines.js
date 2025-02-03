const noButtonPrompts = [
    "Are you sure?",
    "Why not?",
    "Think about it.",
    "Yeah, there's no escape.",
    "PLEASE!!!!!!"
];

let counter = 0;

document.getElementById("no").addEventListener("click", function(){
    let randomPrompt = noButtonPrompts[Math.floor(Math.random() * noButtonPrompts.length)];

    document.getElementById('no').innerText = randomPrompt;
    
    counter += 1;

    let yesButton = document.getElementById('yes');
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    let currentSizeNumber = parseFloat(currentSize);

    let newSize = currentSizeNumber * 1.10;
    yesButton.style.fontSize = newSize + 'px';
});

document.getElementById("yes").addEventListener("click", function(){
    localStorage.setItem("noCount", counter);
    
    window.location.href = "thanks.html";
});