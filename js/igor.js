var Igor = {

	redraw: function(){
		var width=$(window).width()*0.85;
		$('div#maincontent').css('left', ($(window).width() / 2) - ($('div#maincontainer').width() / 2));
		$('div#maincontent').css('width', width);
	}
}
$(document).ready(function() {
	Igor.redraw();
})
$(window).resize(function() {
	Igor.redraw(); 
})