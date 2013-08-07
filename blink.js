var userAgentMatch = navigator.userAgent.match(/Firefox\/(.*)$/),
    firefoxVersion,
    blinkVisible = true,
    blinkStart,
    blinkNext;

if (userAgentMatch && userAgentMatch.length > 1) {
    firefoxVersion = userAgentMatch[1];
}

if (userAgentMatch && userAgentMatch.length > 1 && firefoxVersion >= 23) {
    var blinkTags = function () {
        if(!blinkStart) {
            blinkStart = new Date().getTime();
            blinkNext = blinkStart;
        }

        blinkNext += 500;        

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
        setTimeout(blinkTags, blinkNext - new Date().getTime());
    };

    window.addEventListener('load',blinkTags,false);
}
