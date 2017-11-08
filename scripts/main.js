// alert();
//results[0].lfs[]
//https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=da548e54a4034fb1b2446c4ec786cfbd&query=batman
$('#getButton').click(function(){
	$('.wordContainer').html('');
	var search = $('#searchResults').val();
	$('.openContainer').toggleClass(".wordContainer");

	$.getJSON('https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=da548e54a4034fb1b2446c4ec786cfbd&query='+ search, function(data){
		console.log(data);

		
		for (var i = 0; i < data.results.length; i++) {

			//$('#wordContainer').html(JSON.stringify(data[0].lfs[i]));
			$('.wordContainer').append('<h1 class="button">' + data.results[i].display_title + '<br>' +  data.results[i].summary_short + '</h1>' );

			// $('#movieName').append(data.results[i].display_title);
			// $('#summary').append(data.results[i].summary_short);
			
			console.log(data);
		}

		$('.button').click(function(){
			$(this).toggleClass('open');
			$('.wordContainer').toggleClass('openContainer');
			// $('.description').css('display','inline-block');
		});
	});
});
	
