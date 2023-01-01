var old_url = ''; 
var hooked = false; 
var gain_val = 2; // supporting float values 

var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
            if (location.href != old_url && hooked == false) {
                old_url = location.href;
				if(document.querySelector('video') != null ){
					const video = document.querySelector('video');
					const audioCtx = new AudioContext();
					const mediaSource = audioCtx.createMediaElementSource(video);        
					const gainNode = audioCtx.createGain();
					mediaSource.connect(gainNode);
					gainNode.connect(audioCtx.destination);
					window.boosterGainNode = gainNode;
					window.boosterGainNode.gain.value = parseFloat(gain_val);
					hooked = true;
				}else{
					hooked = false;
				}
            }
    });
});

mutationObserver.observe(document.documentElement, {childList: true, subtree: true});

/*
Better-YT-Volume 1.0
created : 2023-01-01
by: kRDY

Use a default gain value on youtube videos, setting the gain_val higher than '2.0' can result in distorted audio. 

*/


