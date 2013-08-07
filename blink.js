var userAgentMatch = navigator.userAgent.match(/Firefox\/(.*)$/),
    firefoxVersion,
    blinkVisible = true;

if (userAgentMatch && userAgentMatch.length > 1) {
    firefoxVersion = userAgentMatch[1];
}

if (userAgentMatch && userAgentMatch.length > 1 && firefoxVersion >= 23) {
    var blinkTags = function () {
        var blinkElements = document.getElementsByTagName('blink');

        if (blinkVisible === false) {
            for (var i = 0; i < blinkElements.length; i++) {
                blinkElements[i].style.visibility = 'visible';
            }
            blinkVisible = true;
        } else {
            for (var i = 0; i < blinkElements.length; i++) {
                blinkElements[i].style.visibility = 'hidden';
            }
            blinkVisible = false;
        }
        setTimeout(blinkTags, 500);
    };

    window.addEventListener('load',blinkTags,false);
}
