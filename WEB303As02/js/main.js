// WEB303 Assignment 2


$(document).ready(function () {
    // Function to load content from a file via AJAX
    function loadContent(file) {
        $.ajax({
            url: file,
            dataType: 'html',
            success: function (data) {
                // Animate the content div to hide and show the new content
                $('#content').fadeOut('fast', function () {
                    $(this).html(data).fadeIn('fast');
                });
            },
            error: function () {
                console.log('Error loading content.');
            }
        });
    }

    // Attach click event handlers to the links
    $('#prospect').click(function (e) {
        e.preventDefault();
        loadContent('prospect.html');
    });

    $('#convert').click(function (e) {
        e.preventDefault();
        loadContent('convert.html');
    });

    $('#retain').click(function (e) {
        e.preventDefault();
        loadContent('retain.html');
    });
});
