document.getElementById('hamburger').onclick = function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Hide sidebar
    } else {
        sidebar.style.left = '0px'; // Show sidebar
    }
};
