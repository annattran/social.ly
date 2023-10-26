document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#registration-form').addEventListener('submit', function (event) {

        event.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const emailDomain = email.substr(email.indexOf("@") + 1);
        const emailService = emailDomain.substr(0, emailDomain.indexOf('.'));
        const checkbox = document.querySelector('#checkbox').checked;

        const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (name === '' || email == - '' || emailFormat.test(email) === false) {
            alert('Name and email must be filled out. Make sure email address is valid.')
        } else {
            if (checkbox === false) {
                alert('You must agree to the terms and conditions')
            } else {
                document.querySelector('.registree-name').innerText = name;
                document.querySelector('.email-address').innerText = emailService;
                document.querySelector('#modal-overlay').style.display = 'flex';
            }
        }
    });

    document.querySelector('#close-button').addEventListener('click', function (event) {
        document.querySelector('#modal-overlay').style.display = 'none';
    })

    document.querySelector('#modal-overlay').addEventListener('click', function (event) {
        if ((event.target).classList.contains('modal-overlay')) {
            document.querySelector('#modal-overlay').style.display = 'none';
        }
    })
});