//https://serviceworke.rs/
//https://googlechrome.github.io/samples/service-worker/custom-offline-page/
//https://www.captechconsulting.com/blogs/my-experience-using-service-workers


//http://stackoverflow.com/questions/41885974/service-worker-getting-cachebuster-error-in-chrome
//https://davidyoung.tech/simple-service-worker-setup


//*********A Bingham Comment 25/1/17 - In initial testing proved problematic syncing back to the server. This is highly experimental at the moment! It only works on Chrome PC and Android.

//This is the last aspect to inegrate into your development, in order to prevent testing issues with your JS.
//With the code below, it is PoS_2sibe to load the app in less than 2 seconds on the second visit.

/*

var CACHE = 'network-or-cache';



self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');



  evt.waitUntil(precache());
});



self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.');
//can add a var here so that if the AJAX cannot get a response, it produces a standard response
var offline = true;


  evt.respondWith(fromNetwork(evt.request, 400).catch(function () {


    return fromCache(evt.request);
  }));
});


function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
    //A list of files that you want to cache on first run of the app
    '/MAD/PoS_2/',

    '/MAD/PoS_2/img/logo.png',
    '/MAD/PoS_2/img/logosmall.png',

    '/MAD/PoS_2/iconfont/MaterialIcons-Regular.woff',

    '/MAD/PoS_2/iconfont/MaterialIcons-Regular.ttf',

    '/MAD/PoS_2/manifest.json',
    '/MAD/PoS_2/partialViews/_register.html',
    '/MAD/PoS_2/partialViews/_viewAllRecipes.html',
    '/MAD/PoS_2/css/materialize.min.css',
    '/MAD/PoS_2/css/style.css',
    '/MAD/PoS_2/css/swiper.min.css',
    '/MAD/PoS_2/js/fastclick.js',
    '/MAD/PoS_2/js/materialize.min.js',
    '/MAD/PoS_2/js/masonry.pkgd.min.js',
    '/MAD/PoS_2/js/swiper.min.js',
    '/MAD/PoS_2/js/PartialViewControl.js',
    '/MAD/PoS_2/js/changeAppPage.js',
    '/MAD/PoS_2/js/swipeFlash.js',
    '/MAD/PoS_2/js/jquery.browser.min.js',
    '/MAD/PoS_2/js/login.js',
    '/MAD/PoS_2/js/init.js',

    '/MAD/PoS_2/js/createRecipe.js',
    '/MAD/PoS_2/js/createStep.js',
    '/MAD/PoS_2/js/getCreatedSteps.js',

    '/MAD/PoS_2/js/getAllRecipes.js',

    '/MAD/PoS_2/js/exif.js',
    '/MAD/PoS_2/js/binaryajax.js',
    '/MAD/PoS_2/js/jquery-2.1.1.min.js',
    '/MAD/PoS_2/js/swiper.jquery.min.js',
    '/MAD/PoS_2/lib/exif.js',
    '/MAD/PoS_2/lib/binaryajax.js'
    ]);
  });
}


function fromNetwork(request, timeout) {
  return new Promise(function (fulfill, reject) {


    var timeoutId = setTimeout(reject, timeout);


    fetch(request).then(function (response) {
      clearTimeout(timeoutId);
      fulfill(response);


    }, reject);
  });
}


function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}


*/



















/*

var CACHE = 'cache-and-update';





self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');




  evt.waitUntil(precache());
});




self.addEventListener('fetch', function(evt) {

  console.log('The service worker is serving the asset from cache.');

//can add a var here so that if the AJAX cannot get a response, it produces a standard response


  evt.respondWith(fromCache(evt.request));




  evt.waitUntil(update(evt.request));
});




function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
    '/MAD/PoS_2/',

    '/MAD/PoS_2/img/logo.png',
    '/MAD/PoS_2/img/logosmall.png',

    '/MAD/PoS_2/iconfont/MaterialIcons-Regular.woff',

    '/MAD/PoS_2/iconfont/MaterialIcons-Regular.ttf',

    '/MAD/PoS_2/manifest.json',
    '/MAD/PoS_2/partialViews/_register.html',
    '/MAD/PoS_2/partialViews/_viewAllRecipes.html',
    '/MAD/PoS_2/css/materialize.min.css',
    '/MAD/PoS_2/css/style.css',
    '/MAD/PoS_2/css/swiper.min.css',
    '/MAD/PoS_2/js/fastclick.js',
    '/MAD/PoS_2/js/materialize.min.js',
    '/MAD/PoS_2/js/masonry.pkgd.min.js',
    '/MAD/PoS_2/js/swiper.min.js',
    '/MAD/PoS_2/js/PartialViewControl.js',
    '/MAD/PoS_2/js/changeAppPage.js',
    '/MAD/PoS_2/js/swipeFlash.js',
    '/MAD/PoS_2/js/jquery.browser.min.js',
    '/MAD/PoS_2/js/login.js',
    '/MAD/PoS_2/js/init.js',

    '/MAD/PoS_2/js/createRecipe.js',
    '/MAD/PoS_2/js/createStep.js',
    '/MAD/PoS_2/js/getCreatedSteps.js',

    '/MAD/PoS_2/js/getAllRecipes.js',

    '/MAD/PoS_2/js/exif.js',
    '/MAD/PoS_2/js/binaryajax.js',
    '/MAD/PoS_2/js/jquery-2.1.1.min.js',
    '/MAD/PoS_2/js/swiper.jquery.min.js',
    '/MAD/PoS_2/lib/exif.js',
    '/MAD/PoS_2/lib/binaryajax.js'

    ]);
  });
}




function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}




function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}



*/

















//Code version 1.0 19/1/17

var reg;

var CACHE_NAME = 'PoS_2-app-cache-v7';
var urlsToCache = [
'/MAD/PoS_2/',

'/MAD/PoS_2/img/logo.png',
'/MAD/PoS_2/img/logosmall.png',

'/MAD/PoS_2/iconfont/MaterialIcons-Regular.woff',

'/MAD/PoS_2/iconfont/MaterialIcons-Regular.ttf',

'/MAD/PoS_2/manifest.json',
'/MAD/PoS_2/partialViews/_register.html',
'/MAD/PoS_2/partialViews/_viewAllRecipes.html',
'/MAD/PoS_2/css/materialize.min.css',
'/MAD/PoS_2/css/style.css',
'/MAD/PoS_2/css/swiper.min.css',
'/MAD/PoS_2/js/fastclick.js',
'/MAD/PoS_2/js/materialize.min.js',
'/MAD/PoS_2/js/masonry.pkgd.min.js',
'/MAD/PoS_2/js/swiper.min.js',
'/MAD/PoS_2/js/PartialViewControl.js',
'/MAD/PoS_2/js/changeAppPage.js',
'/MAD/PoS_2/js/swipeFlash.js',
'/MAD/PoS_2/js/jquery.browser.min.js',
'/MAD/PoS_2/js/login.js',
'/MAD/PoS_2/js/init.js',

'/MAD/PoS_2/js/createRecipe.js',
'/MAD/PoS_2/js/createStep.js',
'/MAD/PoS_2/js/getCreatedSteps.js',

'/MAD/PoS_2/js/getAllRecipes.js',

'/MAD/PoS_2/js/exif.js',
'/MAD/PoS_2/js/binaryajax.js',
'/MAD/PoS_2/js/jquery-2.1.1.min.js',
'/MAD/PoS_2/js/swiper.jquery.min.js',
'/MAD/PoS_2/lib/exif.js',
'/MAD/PoS_2/lib/binaryajax.js'


];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Cache ready');
            return cache.addAll(urlsToCache);
        })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        // We look if the request fits an element in the cache
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                // We return the element in the cache
                return response;
            }
            // Otherwise we let the request look into the network
            return fetch(event.request);
        })
    );
});




self.addEventListener('activate', function(event) {

    var cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    // We remove all the cache except the ones in cacheWhitelist array
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
