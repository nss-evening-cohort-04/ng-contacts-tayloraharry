"use strict";

app.factory("ContactFactory", function($q, $http, FIREBASE_CONFIG){

  var getContactsList = function(){
    return $q((resolve, reject)=> {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`).success(function(response) {
        let contacts = [];
        Object.keys(response).forEach(function(key){
          response[key].id= key;
          contacts.push(response[key]);
        });
        resolve(contacts);
      }).error(function(errorResponse) {
        reject();
      });
    });
  };

  var postNewContact = function(newContact){
    return $q((resolve, reject)=> {
      console.log(newContact);
      $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify({
        name: newContact.name,
        day_phone : newContact.dphone,
        evening_phone : newContact.ephone,
        email : newContact.email,
        address_line_1 : newContact.addlin1,
        address_line_2 : newContact.addlin2,
        city : newContact.city,
        state : newContact.state,
        zip : newContact.zip,
        country : newContact.country
      })
      ).success(function(postResponse) {
        resolve(postResponse);
      }).error(function(postError) {
        reject(postError);
      });
    });
  };



  return {getContactsList:getContactsList, postNewContact:postNewContact};

});