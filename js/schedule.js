jQuery(document).ready(function() {
	
	var oi = null;
	var dc = null;
	var t = false;
	
	jQuery('#gdd2011-dateArea img').hover(
		function() {
			oi = jQuery(this).attr('src');
			var p = oi.split('/');
			var i = p[4];
			var is = i.split('_');
						
			if (is[2] != 'gold.png' && dc != is[1]) {
				jQuery(this).attr('src', p[0] + '/' + p[1] + '/' + p[2] + '/' + p[3] + '/' + 'ico_' + is[1] + '_small_hover.png');
			}
		},
		function() {
			if (dc != jQuery(this).attr('id')) {
				jQuery(this).attr('src', oi);
			}
		}
	);
	
	jQuery('#gdd2011-dateArea img').click(function() {
		
		if (t == false) {
			t = true;
			
			oi = jQuery(this).attr('src');
			var p = oi.split('/');
			var i = p[4];
			var is = i.split('_');
							
			if (is[2] != 'gold.png') {
				dc = is[1];
				jQuery('#gdd2011-dateArea img').each(function() {
					var p = jQuery(this).attr('src').split('/');
					var i = p[4];
					var is = i.split('_');
					if (is[2] == 'gold.png' && dc != is[1]) {
						jQuery(this).attr('src', p[0] + '/' + p[1] + '/' + p[2] + '/' + p[3] + '/' + 'ico_' + is[1] + '_small_norm.png');
					}
					
				});
				jQuery(this).attr('src', p[0] + '/' + p[1] + '/' + p[2] + '/' + p[3] + '/' + 'ico_' + is[1] + '_gold.png');
				
				jQuery('.gdd2011-schedule-day').each(function() {
					if (jQuery(this).is(':visible')) {
						jQuery(this).fadeOut(800, function() {
							jQuery('#gdd2011-schedule-day-' + is[1]).fadeIn(800, function() {
								t = false;
							});
							
						});
					}
				})
				
			} else {
				t = false;
			}
			
		}
		
	});
		
});
