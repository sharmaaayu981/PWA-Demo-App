<script>
    ;function imageIntersectionObserverCallback(imageEntries, observer) {
        imageEntries.forEach(imgEntry => {
            if (imgEntry.isIntersecting) {
                imgEntry.target.setAttribute('src', imgEntry.target.dataset.src);
                observer.unobserve(imgEntry.target);
            }
        })
    }
    const imageObserver = new IntersectionObserver(imageIntersectionObserverCallback, { rootMargin: '30px 0px' });
    imageObserver.POLL_INTERVAL = 200;
    imageObserver.USE_MUTATION_OBSERVER = false;
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    })
</script>
<script>
    function iframeObserverCallback(iframeEntries, observer) {
        iframeEntries.forEach(iframe => {
            if (iframe.isIntersecting && window.matchMedia('(min-width: 450px)').matches) {
                iframe.target.setAttribute('src', iframe.target.dataset.urllink);
                observer.unobserve(iframe.target);
            }
        })
    }

    const iframeObserver = new IntersectionObserver(iframeObserverCallback, { rootMargin: '30px 0px' });
    iframeObserver.POLL_INTERVAL = 200;
    iframeObserver.USE_MUTATION_OBSERVER = false;
    document.querySelectorAll('iframe[data-urllink]').forEach(img => {
        iframeObserver.observe(img);
    });

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
                navigator.serviceWorker.register('service-worker.js')
                    .then(function () {
                        console.log("Service Worker Registered,");
                    });
            }
        );
    }
</script>