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
			$('#modalH1').html('');
			$('#modal').css('margin-top', '0px');
			$('#modalH1').attr('class','open');
			$('#modalH1').append($(this).html());
			
			console.log(this);
		});

		$('#close').click(function(){
			$('#modal').css('margin-top', '-315px');
		});
	});
});
	
			// $('.wordContainer').empty();
			// $(this).toggleClass('open');
			// $('.wordContainer').toggleClass('openContainer');
			// $('.wordContainer').css('display', 'none');
			// $('.description').css('display','inline-block');