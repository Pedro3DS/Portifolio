document.addEventListener('pointermove', function(e) {
    var bg = document.getElementById('cursor-bg');

    bg.style.display = 'flex';
    bg.animate({
        top: (e.pageY - 70) + 'px',
        left: (e.pageX - 120) + 'px',
    }, {
        duration: 0.001,
        fill: 'forwards'
    })
})
