// According to Kevin P:
// when we use square brackets, the js is looking for the attribute "data-src"
// inside the css file.
const images = document.querySelectorAll("[data-src]")



// make a new image Observer object
function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px"
};

const imgObserver = new IntersectionObserver((entries,imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imagesObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(img => {
    imgObserver.observe(image);
}