(function(){
    const waterfall = document.querySelector('[data-waterfall]');
    if(!waterfall){
        return;
    }

    const items = Array.from(waterfall.querySelectorAll('.waterfall-item'));
    if(items.length === 0){
        return;
    }

    let animationFrame = 0;
    let observedWidth = 0;
    let isReady = false;

    function layout(){
        animationFrame = 0;

        const availableWidth = waterfall.clientWidth;
        const itemWidth = items[0].getBoundingClientRect().width;
        if(availableWidth === 0 || itemWidth === 0){
            return;
        }

        const columnCount = Math.max(1, Math.min(items.length, Math.floor(availableWidth / itemWidth)));
        const startX = (availableWidth - columnCount * itemWidth) / 2;
        const columnHeights = Array(columnCount).fill(0);

        items.forEach(function(item, index){
            const shortestHeight = Math.min.apply(null, columnHeights);
            const columnIndex = index < columnCount ? index : columnHeights.indexOf(shortestHeight);
            const x = startX + columnIndex * itemWidth;
            const y = columnHeights[columnIndex];

            item.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
            columnHeights[columnIndex] += item.getBoundingClientRect().height;
        });

        waterfall.style.height = Math.max.apply(null, columnHeights) + 'px';
        waterfall.classList.add('is-ready');
    }

    function scheduleLayout(){
        if(!isReady){
            return;
        }

        window.cancelAnimationFrame(animationFrame);
        animationFrame = window.requestAnimationFrame(layout);
    }

    const resizeObserver = new ResizeObserver(function(entries){
        const nextWidth = entries[0].contentRect.width;
        if(nextWidth === observedWidth){
            return;
        }

        observedWidth = nextWidth;
        scheduleLayout();
    });

    function initialize(){
        isReady = true;
        observedWidth = waterfall.clientWidth;
        layout();
        resizeObserver.observe(waterfall);
    }

    if(document.readyState === 'complete'){
        initialize();
    }else{
        window.addEventListener('load', initialize, { once: true });
    }
})();
