var userAgentMatch = navigator.userAgent.match(/Firefox\/(.*)$/),
    firefoxVersion;

if (userAgentMatch && userAgentMatch.length > 1) {
    firefoxVersion = userAgentMatch[1];
}

if (userAgentMatch && userAgentMatch.length > 1 && firefoxVersion >= 23) {
    function blinkTags() {
        var visible = true;

        setInterval(function() {
            var blinks = document.getElementsByTagName('blink');

            if (visible === false) {
                for (var i = 0; i < blinks.length; i++) {
                    blinks[i].style.visibility = 'visible';
                }
                visible = true;
            } else {
                for (var i = 0; i < blinks.length; i++) {
                    blinks[i].style.visibility = 'hidden';
                }
                visible = false;
            }
        }, 500);
    }

    window.onload = function() {
        blinkTags();
    };
}
