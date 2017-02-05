//Get partial view html
function getScreenContent(screen) {


    var contentLoaded;

    console.log("screen content injection for " + screen);


    //Get HTML via a promise
    fetch('partialViews/' + screen + '.html', {
            mode: 'cors'
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            $(".contentRoot").append(data);
            contentLoaded = true;
        }) //end fetch
        .catch(function(error) {
            //log('Request for partial view failed', error) ;
        });


    /*
        $.get('partialViews/' + screen + '.html', function(data) {
            //inject the content into the DOM
            $(".contentRoot").append(data);
            contentLoaded = true;

        }); //end get

        */



} //close function
