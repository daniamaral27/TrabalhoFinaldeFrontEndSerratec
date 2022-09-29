(function(){
	defaultSeconds('.flex-container').waitForImages(function() {
		defaultSeconds('.spinner').fadeOut();
	}, $.noop, true);
	
	defaultSeconds(".flex-slide").each(function(){
		defaultSeconds(this).hover(function(){
			defaultSeconds(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			defaultSeconds(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function(){
			defaultSeconds(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			defaultSeconds(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
})();