// Get elements from the DOM
const customInput = document.getElementById('customInput');
const customText = document.getElementById('customText');
const updateButton = document.getElementById('updateButton');

// Event listener to update text
updateButton.addEventListener('click', () => {
    const newText = customInput.value;
    customText.textContent = newText;
});
