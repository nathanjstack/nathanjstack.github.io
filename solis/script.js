/**
 * Generic function to scroll a carousel container
 * @param {string} carouselId - The ID of the container element
 * @param {string} direction - 'left' or 'right'
 */
function scrollCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    
    if (!carousel) return;

    // Gets the exact width of one card + the gap (20px)
    const itemWidth = carousel.firstElementChild.offsetWidth + 20; 
    
    // Calculate maximum scrollable width
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (direction === 'left') {
        // If we are at the very beginning, scroll/loop all the way to the end
        if (carousel.scrollLeft <= 0) {
            carousel.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
            carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        }
    } else {
        // If we are at the very end, scroll/loop back to the beginning
        // (Using a 5px buffer for sub-pixel browser calculations)
        if (carousel.scrollLeft >= maxScrollLeft - 5) {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
    }
}

// Existing Carousel Code ...
function scrollCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    const itemWidth = carousel.firstElementChild.offsetWidth + 20; 
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    if (direction === 'left') {
        if (carousel.scrollLeft <= 0) {
            carousel.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
            carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        }
    } else {
        if (carousel.scrollLeft >= maxScrollLeft - 5) {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });

    // Check if the URL has a hash (e.g., services.html#massage)
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1); // remove the #
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Wait a tiny bit for the page to load, then open and scroll
            setTimeout(() => {
                targetElement.classList.add('active');
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500);
        }
    }
});