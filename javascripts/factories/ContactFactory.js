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

  var getSingleContact = function(contactId){
    return $q((resolve, reject)=> {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`
      ).success(function(postResponse) {
        resolve(postResponse);
      }).error(function(postError) {
        reject(postError);
      });
    });
  };

  var postNewContact = function(newContact){
    return $q((resolve, reject)=> {
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


  var deleteContact = function(contactId){
    return $q((resolve, reject)=> {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`
      ).success(function(postResponse) {
        resolve(postResponse);
      }).error(function(postError) {
        reject(postError);
      });
    });
  };

  var editContact = function(editedContact){
    return $q((resolve, reject)=> {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${editedContact.id}.json`, JSON.stringify({
        name: editedContact.name,
        day_phone : editedContact.day_phone,
        evening_phone : editedContact.evening_phone,
        email : editedContact.email,
        address_line_1 : editedContact.address_line_1,
        address_line_2 : editedContact.address_line_2,
        city : editedContact.city,
        state : editedContact.state,
        zip : editedContact.zip,
        country : editedContact.country
      })
      ).success(function(editResponse) {
        resolve(editResponse);
        console.log("edited successfully", editResponse)
      }).error(function(editError) {
        reject(postError);
      });
    });
  };



  return {getContactsList:getContactsList, getSingleContact:getSingleContact, postNewContact:postNewContact, deleteContact:deleteContact, editContact:editContact};

});