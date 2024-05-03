// Get the navbar element
var navbar = document.querySelector('.navbar');

// Variable to store the last scroll position
var lastScrollTop = 0;

// Function to handle scroll events
function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add the navbar--hidden class if scrolling down, remove it if scrolling up
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('navbar--hidden');
    } else {
        navbar.classList.remove('navbar--hidden');
    }

    // Update the last scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', () => {
    const pictures = document.querySelectorAll('.picture');

    pictures.forEach(picture => {
        const distanceFromTop = picture.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Calculate the distance from the bottom of the image to the top of the viewport
        const distanceFromBottom = windowHeight - picture.getBoundingClientRect().bottom;

        // Check if the top of the image is within the viewport or the bottom is near the viewport
        if (distanceFromTop < windowHeight * 0.75 && distanceFromBottom > -windowHeight * 0.25) {
            picture.classList.add('picture-visible');
        } else {
            picture.classList.remove('picture-visible');
        }
    });
});

