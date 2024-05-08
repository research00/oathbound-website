// Get the navbar element
var nav = document.querySelector('.nav');

// Variable to store the last scroll position
var lastScrollTop = 0;

// Function to handle scroll events
function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add the navbar--hidden class if scrolling down, remove it if scrolling up
    if (scrollTop > lastScrollTop) {
        nav.classList.add('nav--hidden');
    } else {
        nav.classList.remove('nav--hidden');
    }

    // Update the last scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);


