document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show'); // Toggle the 'show' class to expand/collapse
});

// Adding event listeners to each nav item
document.getElementById('hamburger').onclick = function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Hide sidebar
    } else {
        sidebar.style.left = '0px'; // Show sidebar
    }
};

// Search function
function searchPlaces() {
    const input = document.getElementById('search-input').value.toLowerCase(); // Get the search input
    const places = document.querySelectorAll('.place'); // Select all places
    places.forEach(place => {
        const title = place.querySelector('h3').textContent.toLowerCase(); // Get place title
        if (title.includes(input)) {
            place.style.display = ''; // Show if it matches
        } else {
            place.style.display = 'none'; // Hide if it doesn't match
        }
    });
}
