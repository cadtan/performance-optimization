$(document).ready( function(){

	var thumbImage = $(".image img");

	$(thumbImage).on( 'click', function() {
		// Get anchor id from parent link
		var anchorId = "#" + $(this).parent().attr("data-reveal-id");
		var largeImage = $(anchorId).children('img')[0];
		// Change image path link to larger image
		$(largeImage).attr( 'src', $(largeImage).attr('src').replace('/thumbnails', '') );
	});

});