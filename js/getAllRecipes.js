function getAllRecipes() {


    $('.progress').css({
        "visibility": "visible"
    });
    $('.progressWrapper').css({
        "visibility": "visible"
    });

    var contentLoaded;
    var response;

    $("#stepsContent").empty();

    var baseURL = "https://u0018370.scm.tees.ac.uk/Yii/PoS/stepImages/";

    //The new way of getting data via the promise --I think this can be made better
    //https://davidwalsh.name/fetch
    var url = 'https://u0018370.scm.tees.ac.uk/Yii/PoS/index.php/Site/getAllRecipes';
    fetch(url, {
            mode: 'cors',
              credentials: 'include'

        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {




            console.log('Request successful', data.recipeData.length);
            var content = [];
            var j = 1;
            var dataLength = data.recipeData.length;



            for (var i = 0; i < data.recipeData.length; i++) {


                var item = data.recipeData[i];


                var recipe_id = item.recipe_id;
                var name = item.name;
                var copy = item.copy;
                var stepImage = baseURL + item.stepImage;
                //content = '<div class="card medium"><div class="card-image"><img class="stepsPreviewImg" src="' + stepImage + '"></div><div class="card-content black-text"><span class="activator card-title-full-rec ">' + name + '<i class="material-icons right">more_vert</i></span></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">' + name + '<i class="material-icons right">close</i></span><p>' + copy + '</p><div class="card-action"><a class="_viewFullRecipe" _itemid="' + recipe_id + '" href="#">View Recipe</a></div></div><a class="_viewFullRecipe" _itemid="' + recipe_id + '">View Recipe</a></div>';
                content = '<div class="card medium"><div class="card-image"><img class="stepsPreviewImg" src="'+stepImage+'"></div><div class="card-content black-text"><span class="activator card-title-full-rec ">'+name+'<i class="material-icons right">more_vert</i></span></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'+name+'<i class="material-icons right">close</i></span><p>'+copy+'</p><div class="card-action"><a class="_viewFullRecipe" _itemid="'+recipe_id+'" href="#">View Recipe</a></div></div><a class="_viewFullRecipe" _itemid="'+recipe_id+'"><span><i class="material-icons">&#xE8F4;</i></span>View Recipe</a></div>';

                $("#recipeContent").append(content);


                j++;


            } //close outer loop


            //tried putting the URL and response into the cache--does not work
            //caches.open('pos-app-cache-v7').then(function(cache){
            //add response to cache
            //cache.put(url,response);
            //});


            $('.progress').css({
                "visibility": "hidden"
            });
            $('.progressWrapper').css({
                "visibility": "hidden"
            });


            contentLoaded = true;
        }) //end fetch
        .catch(function(error) {
            //log('Request failed', error) ;
        });




    return false;

} //close function
