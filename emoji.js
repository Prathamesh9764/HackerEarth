// Sample emojis array, you can add more emojis as per your requirement.
const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"];

// Function to display emojis on the page
function displayEmojis(emojiArray) {
    const emojiListElement = document.getElementById("emojiList");
    emojiListElement.innerHTML = "";

    emojiArray.forEach(emoji => {
        const emojiElement = document.createElement("div");
        emojiElement.classList.add("emoji");
        emojiElement.textContent = emoji;
        emojiListElement.appendChild(emojiElement);
    });
}

// Function to filter emojis based on the search input
function filterEmojis(searchTerm) {
    const filteredEmojis = emojis.filter(emoji => emoji.includes(searchTerm));
    displayEmojis(filteredEmojis);
}

// Event listener for search input
document.getElementById("searchInput").addEventListener("input", event => {
    const searchTerm = event.target.value.trim();
    filterEmojis(searchTerm);
});

// Initial display of all emojis
displayEmojis(emojis);
