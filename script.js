$('#contact-form').submit(function(e)    {
    var firstName = document.getElementById('inputFirstName');
    var lastName = document.getElementById('inputLastName');
    var email = document.getElementById('inputEmail');
    var message = document.getElementById('inputMessage');

    if (!firstName.value || !lastName.value || !email.value || !message.value)  {
        alertify.error('Please double check your form entries for accruacy!')
    } else {
        $.ajax({
            url: "https://formspree.io/f/xwkwnypz",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"    
        });

        e.preventDefault()
        $(this).get(0).reset()
        alertify.success('Message successfully sent!')
    }
})