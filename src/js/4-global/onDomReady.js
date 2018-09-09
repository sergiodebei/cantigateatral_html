$(document).on("ready", function () {
	//hamburger menu
	$('.hamburger-menu').on('click', function() {
        $(this).toggleClass('open');
        $('nav').toggleClass('open');
	});

	var header = $("header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            header.addClass("darkHeader");
        } else {
            header.removeClass("darkHeader");
        }
    });
});

