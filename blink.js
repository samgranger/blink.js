var userAgentMatch = navigator.userAgent.match(/Firefox\/(.*)$/),
    firefoxVersion,
    blinkVisible = true;

if (userAgentMatch && userAgentMatch.length > 1) {
    firefoxVersion = userAgentMatch[1];
}

if (userAgentMatch && userAgentMatch.length > 1 && firefoxVersion >= 23) {
    var blinkTags = function () {
        var blinkElements = document.getElementsByTagName('blink');

        for (var i = 0; i < blinkElements.length; i++) {
            blinkElements[i].style.visibility = blinkVisible ? 'visible' : 'hidden';
        }
        blinkVisible = !blinkVisible;

        setTimeout(blinkTags, 500);
    };

    window.addEventListener('load',blinkTags,false);
}
