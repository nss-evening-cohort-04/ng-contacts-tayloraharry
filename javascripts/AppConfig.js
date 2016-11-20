"use strict";

app.run(function(FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
  $routeProvider
      .when('/contacts/list', {
        templateUrl: 'partials/contact-view.html',
        controller: 'MainContactCtrl'
      })
      .when('/contacts/add', {
        templateUrl: 'partials/contact-new.html',
        controller: 'MainContactCtrl'
      })
      .when('/contacts/edit/:id',{
        templateUrl: 'partials/contact-edit.html',
        controller: 'ContactEditCtrl'
      })
      .otherwise('/contacts/list',{});
});