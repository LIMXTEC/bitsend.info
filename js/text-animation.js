(function() {

	var items = [].slice.call(document.querySelectorAll('.grid'));
	var w = window.innerWidth;
	var h = window.innerHeight;
	var sz = 40;
	//galaxy s5 potrait
	if(w==360&&h==640){
		sz = 28;
	}
	else if(w==320&&h==568){
		sz = 25;
	}
	else if(w==768&&h==1024){
		sz = 40;
	}
	else if(w==1024&&h==1366){
		sz = 60
	}
	function init() {
		items.forEach(function(item) {
			var word = item.querySelector('.grid__heading'),
				// initialize the plugin
				instance = new Letters(word, {
					size : sz,
					weight : 10,
					color: '#337ab7',
					duration: 0.8,
					delay: 0.1,
					fade: 0,
					easing: d3_ease.easeExpOut.ease
				});

			// show word
			instance.showInstantly();
			instance.hide({
					duration: 1,
					delay: 0,
					fade: 1,
					easing: d3_ease.easeExpOut.ease,
					callback: function() {
						instance.show();
					}
				});
			setInterval(function(){ instance.hide({
					duration: 1,
					delay: 0,
					fade: 1,
					easing: d3_ease.easeExpOut.ease,
					callback: function() {
						instance.show();
					}
				}); }, 5000);
			
			item.addEventListener('click', function() {
				instance.hide({
					duration: 1,
					delay: 0,
					fade: 1,
					easing: d3_ease.easeExpOut.ease,
					callback: function() {
						instance.show();
					}
				});
			});
		});
	}

	init();
})();
