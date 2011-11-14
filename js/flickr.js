jQuery(document).ready(function() {
	
	jQuery.ajax({
		cache:true,
		dataType: 'jsonp',
		jsonp: false,
		jsonpCallback: 'jsonFlickrApi',
		data: {
			method: 'flickr.groups.pools.getPhotos',
			api_key: '628933afc242aba4abe5c17f0bb0e5e9',
			group_id: '1801459@N23',
			per_page: 15,
			format: 'json'
		},
		url: 'http://api.flickr.com/services/rest/',
		success: function(data) {
			console.log('data', data);
			jQuery.each(data.photos.photo, function(i, photo) {
				// http://farm7.static.flickr.com/6202/6112228204_928a235244_z.jpg
				var _url = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_t.jpg';
				jQuery('#gdd2011-flickr-photos').append("<img src='" + _url + "' alt='" + photo.title + "' />");	
			});
			
		}
		
	});
	
});