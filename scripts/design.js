const buttons = document.querySelectorAll('.hero-content button');
const descriptions = [
    "Our fiery orange color scheme ignites a sense of energy, warmth, and innovation, making it a perfect fit for our brand's design philosophy. Orange is known to evoke feelings of enthusiasm, creativity, and excitement, which aligns with our goal of fostering bold ideas and forward-thinking approaches. The vibrant hue stands out, capturing attention immediately while maintaining a welcoming and friendly tone.",
    "The whimsical Playwrite font perfectly embodies the essence of our fiery brand, adding a playful yet bold element to our visual identity. Just as our vibrant orange color scheme ignites creativity and energy, the Playwrite font brings a dynamic and expressive flair to our design. Its flowing, free-spirited strokes mirror the passion and innovation that define our brand, making it a natural fit for conveying excitement and imagination."
];

// Shortened descriptions for toggling back
const shortDescriptions = [
    "Our fiery orange color scheme ignites a sense of energy, warmth, and innovation...",
    "The whimsical Playwrite font adds a playful yet bold element to our visual identity..."
];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const descriptionText = button.previousElementSibling;
        // Toggle between full and short descriptions based on the current text
        if (descriptionText.textContent === shortDescriptions[index]) {
            descriptionText.textContent = descriptions[index]; // Show full description
            button.textContent = "Collapse"; // Change button text
        } else {
            descriptionText.textContent = shortDescriptions[index]; // Show short description
            button.textContent = "Expand"; // Change button text
        }
    });
});
