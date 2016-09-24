$(document).ready(function () {
        //    var responseData = function () {
        //        this.item = [];
        //        this.itemList = $('.displayResults');
        //    }
        //    responseData();
        function displayDataOnDom(data) {
            var resultElement = '';
            if (data.results) {
                data.results.forEach(function (item) {
                    resultElement += '<p>' + data.results[0] + '</p>';
                });
            } else {
                resultElement += '<p>No results</p>';
            }
            $('.displayResults').html(resultElement);


            // function clickButton() {
            var jsonResults = data.results;
            $('.findDeals').on('click', function (e) {
                // alert('it works!!!');
                e.preventDefault();
                var output = document.getElementById('.displayResults');
                output.innerHTML = jsonResults;

            });
        };
    };
};
