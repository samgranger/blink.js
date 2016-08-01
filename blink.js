var blinkVisible = true;

var blinkTags = function () {
    var blinkElements = document.getElementsByTagName('blink');

    for (var i = 0; i < blinkElements.length; i++) {
        blinkElements[i].style.visibility = blinkVisible ? 'visible' : 'hidden';
    }
    blinkVisible = !blinkVisible;

    setTimeout(blinkTags, 500);
};

window.addEventListener('load',blinkTags,false);
