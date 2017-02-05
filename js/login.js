//Login Button Click to generate routing
$(document).ready(function() {

    //Detect login click event
    $('._login').click(function() {
        console.log('login button clicked');
        changeAppPage('_login', false);

    });



    //Dynamic DOM element so need to use the on method
    $(document).on('submit', 'form#loginForm', {}, function(e) {

        var data = $(this).serialize();
        var url = 'https://u0018370.scm.tees.ac.uk/Yii/PoS/index.php/Site/loginUserFromClient';

        fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: data,
                credentials: 'include'
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {

                console.log(data); //data from controller
                if (data.action == "login") {


                    $('span#msg').empty();
                    changeAppPage("_dashboard", null);

                } else {


                    $('span#msg').empty();
                    $('span#msg').append(data.message);



                }


                $('.progress').css({
                    "visibility": "hidden"
                });
                $('.progressWrapper').css({
                    "visibility": "hidden"
                });


            })

        .catch(function(error) {
            log('Login Request failed', error);
        });


        return false;


    }); //End Login Function

}); //close doc ready
