$(document).ready(function(){
    $(document).bind('deviceready', function(){
	    $.jsonp({
				url: 'http://search.twitter.com/search.json?q=MultiValue',
				callbackParameter: 'callback',
				timeout: 25000,
				success: function(data, status) {
					$('#feedresult').empty();
					$('#feedresult').append('<ul data-role="listview">');
					$.each(data, function(index,tweet){ 
					
						$('#feedresult').append('<li>' + tweet.text + '- @' + tweet.from_user + '- Location :' + tweet.geo + '</li>');
					});
					$('#feedresult').append('</ul>');
				},
				error: function(){
					$('#feedresult').append('<ul><li>There was an error loading the feed</li></ul>');
				}
		});
			
	});
    
});