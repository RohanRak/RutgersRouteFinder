$(document).ready(function () {
    $('#myForm').submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = $(this).serialize();
        // load which buses are there
        // $.get("translocdata/routes.json", function(data, status) {
        //     $('#result').html(`${data}`);
        // });
        // Send form data using AJAX
        $.ajax({
            type: 'POST',
            url: '/form-handler',
            data: formData,
            success: function (response) {
                // Handle the response from the server
                console.log('Form submission successful:', response);

                // Optionally update the page with the server response
                $('#result').html(response);
            },
            error: function (error) {
                // Handle errors, if any
                console.error('Form submission error:', error);
            }
        });
    });
});