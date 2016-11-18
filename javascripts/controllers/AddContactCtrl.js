"use strict";

app.controller("AddContactCtrl", ($scope, ContactFactory)=> {
  $scope.showListView = true;
  $scope.newContact = {};
  $scope.contacts = [];

let getContacts = function() {
   ContactFactory.getContactsList().then(function(contacts){
   $scope.contacts = contacts;
  });
};

  getContacts();

 $scope.addNewContact = function() {
  ContactFactory.postNewContact($scope.newContact).then(function(itemId){
  getContacts();
  $scope.newContact = {};
  });
 };




});