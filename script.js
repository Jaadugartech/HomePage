// Function to redirect to Google search
function searchGoogle() {
    const query = document.getElementById("searchInput").value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

// Trigger search on "Enter" key
document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchGoogle();
    }
});
