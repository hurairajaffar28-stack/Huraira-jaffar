// Example: Search prompts by keyword
function searchPrompts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.getElementsByClassName('prompt-card');
    
    for (let card of cards) {
        const text = card.innerText.toLowerCase();
        if (text.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}
