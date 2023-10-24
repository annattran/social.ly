$(document).ready(function () {
    $('#registration-form').on('submit', function (event) {

        event.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();
        const emailDomain = email.substr(email.indexOf("@") + 1);
        const emailService = emailDomain.substr(0, emailDomain.indexOf('.'));
        const checkbox = $('#checkbox').is(':checked');

        const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (name === '' || email == - '' || emailFormat.test(email) === false) {
            alert('Name and email must be filled out. Make sure email address is valid.')
        } else {
            if (checkbox === false) {
                alert('You must agree to the terms and conditions')
            } else {
                $('.registree-name').text(name);
                $('.email-address').text(emailService);
                $('#modal-overlay').css('display', 'flex');
            }
        }
    });

    $('#close-button').on('click', function (event) {
        $('#modal-overlay').css('display', 'none');
    })

    $('#modal-overlay').on('click', function (event) {
        if ($(event.target).hasClass('modal-overlay')) {
            $('#modal-overlay').css('display', 'none');
        }
    })
});