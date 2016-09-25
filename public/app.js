$(document).ready(function () {
    //    var responseData = function () {
    //        this.item = [];
    //        this.itemList = $('.displayResults');
    //    }
    //    responseData();
    // function clickButton() {
    console.log('it works!!!');

    $('.findDeals').on('click', function (e) {
        displayDataOnDom();
        e.preventDefault();
        //var output = document.getElementsByClassName('displayResults');
        //output.innerHTML = jsonResults;

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
                    console.log(item);
                    //call the following function (showQuestion(item)) to show the API results
                    resultElement += '<li>';
                    resultElement += '<p>' + item.customerReviews.averageScore + '</p>';
                    resultElement += '<p>' + item.descriptions.short + '</p>';
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
