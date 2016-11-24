$(document).ready(function () {
    //    console.log('it works!!!');

    $('.findDeals').on('click', function (e) {
        displayDataOnDom();
        e.preventDefault();
        $('.findDeals').hide();
    });

    function displayDataOnDom() {
        var resultElement = '';

        $.ajax({
            type: "GET",
            url: "http://localhost:8080/api",
            dataType: 'json'
        })

        .done(function (results) {
            if (results) {
                console.log(results[0].customerReviews.averageScore);

                $.each(results, function (i, item) {
                    //                    console.log(item);
                    //call the following function (showQuestion(item)) to show the API results
                    resultElement += '<li class="results">';
                    resultElement += '<div class="contentWrap">';

                    resultElement += '<p class="title">' + item.names.title + '</p>';
                    resultElement += "<strong>" + '<p> Current Price: $' + "</strong>" + item.prices.current + '</p>';
                    resultElement += "<strong>" + '<p> Regular Price: $' + "</strong>" + item.prices.regular + '</p>';
                    resultElement += "<strong>" + '<p> Condition: ' + "</strong>" + item.offers[0].condition + '</p>';
                    resultElement += "<strong>" + '<p> Customer Reviews: ' + "</strong>" + item.customerReviews.averageScore + '</p>';
                    resultElement += "<strong>" + '<p> Descriptions: ' + "</strong>" + item.descriptions.short + '</p>';
                    resultElement += '</div>';
                    resultElement += '<a href="' + item.links.web + '"> <div class = "product-image" style="background-image: url(' + item.images.standard + ')"></div> </a>';


                    resultElement += '</li>';

                    $('.displayResults').append(resultElement);
                });

            } else {
                resultElement += '<p>No results</p>';
            }
            $('.displayResults').html(resultElement);

        })

        .fail(function (jqXHR, error) {
            $('error').text("there is a server error, plz try again");

        });

    };
});
