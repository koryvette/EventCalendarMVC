/*! Change layout of webpage - 1/01/2020
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */


///////////////////////////////* Background image rotation *//////////////////////////////
$(document).ready(function () {
    var count = 0;
    var images = ["~/img/skyline_day_revised.jpg",
        "img/belle.jpg",
        "img/bourbon.jpg",
        "img/thunder.jpg",
        "img/churchill.jpg",
        "img/4thstreet_revised.jpg",
        "img/slugger.jpg",
        "img/LOU_Skyline_night.jpg",
        "img/centerforarts.jpg",
        "img/highlands.jpg",
        "img/thunder2.jpg",
        "img/Yum_revised.jpg",
        "img/waterfrontpark.jpg",
        "img/ali.jpg",
        "img/slugger2.jpg",
        "img/papajohn_night_revised.jpg",
    ];

    var image = $('#banner');

    image.css("background-image", "url(" + images[count] + ")");

    setInterval(function () {
        image.fadeOut(500, function () {
            image.css("background-image", "url(" + images[count++] + ")");
            image.fadeIn(500);
        });
        if (count == images.length) {
            count = 0;
        }
    }, 5000);

});



//////////////////////////////////* SEARCH function jquery TABLE view*////////////////////////////////
$(document).ready(function () {
    $('#search').keyup(function () {
        search_table($(this).val());
    });
    function search_table(value) {
        $('#table_of_events tr').each(function () {
            var found = 'false';
            $(this).each(function () {
                if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                    found = 'true';
                }
            });
            if (found == 'true') {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    }
});


/////////////////////////////*     SEARCH function jquery TILE view    *////////////////////////////
$(document).ready(function () {
    $('#search').keyup(function () {
        search_table($(this).val());
    });
    function search_table(value) {
        $('#tileLayout .event-thumb').each(function () {
            var found = 'false';
            $(this).each(function () {
                if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                    found = 'true';
                }
            });
            if (found == 'true') {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    }
});
