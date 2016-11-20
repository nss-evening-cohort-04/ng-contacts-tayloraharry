"use strict";

app.controller("ContactEditCtrl", function($scope, $location, $routeParams, ContactFactory) {
  $scope.selectedContact = {};
  let contactId = $routeParams.id;
  ContactFactory.getSingleContact(contactId).then(function(contactToEdit){
    contactToEdit.id = contactId;
    $scope.selectedContact = contactToEdit
  })

  $scope.saveEditedContact = function() {
    console.log($scope.selectedContact);
  ContactFactory.editContact($scope.selectedContact).then(function(response){
      $scope.selectedContact = {};
      $location.url("/contacts/list")
    })
  }
});