const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}


const handleIntersect = (entries, observer) => {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target);
        }
    })
}

export function Observer() {
    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('.reveal').forEach(function (r) {
        observer.observe(r)
    })
}