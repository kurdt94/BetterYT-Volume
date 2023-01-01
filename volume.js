var old_url = '';
var gain_val = 2;
var hooked = false; 

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
		}
            }
    });
});

mutationObserver.observe(document.documentElement, {childList: true, subtree: true});




