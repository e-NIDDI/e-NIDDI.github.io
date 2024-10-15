// Toggle the visibility of the sidebar on small devices when the hamburger icon is clicked
document.getElementById('hamburger').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Hide sidebar
    } else {
        sidebar.style.left = '0px'; // Show sidebar
    }
});

// Adding event listeners to each sidebar nav item to hide the sidebar when clicked
const sidebarNavItems = document.querySelectorAll('#sidebar ul li a');

sidebarNavItems.forEach(item => {
    item.addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        sidebar.style.left = '-250px'; // Hide the sidebar when an item is clicked
    });
});

// Adding event listeners to each navbar item to hide the navbar when clicked
const navItems = document.querySelectorAll('#navbar ul li a');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('show'); // Hide the menu when an item is clicked
    });
});

// Search function for filtering places based on user input
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
