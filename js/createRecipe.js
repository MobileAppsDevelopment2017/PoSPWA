//Login Button Click to generate routing


$(document).on('submit', 'form#createRecipe', {}, function() {

    $('.progress').css({
        "visibility": "visible"
    });
    var data = $(this).serialize();

    //alert(data);
    var url = 'https://u0018370.scm.tees.ac.uk/Yii/PoS/index.php/mAD17Recipe/create';

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
            //return response.text();
        })
        .then(function(data) {

          //  alert(data);
            //data from controller
            if (data.action == "created") {

              //  alert("test");

                $('span#msg').empty();
                $('span#msg').append(data.message);

                setTimeout(function() {
                        changeAppPage('_addRecipeStep', null);
                    },
                    2000);


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



        });



    return false;


}); //End Login Function
