"use strict";

app.controller("MainContactCtrl", function($scope, $location, $routeParams, ContactFactory){
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
  ContactFactory.postNewContact($scope.newContact).then(function(){
  getContacts();
  $location.url("/contacts/list")
  });
 };

 $scope.deleteContact = function(idToDelete) {
  ContactFactory.deleteContact(idToDelete).then(function(){
  getContacts();
  });
 };

 $scope.editContact = function(idToEdit) {
  ContactFactory.editContact(idToEdit).then(function(){
  getContacts();
  });
 };


});