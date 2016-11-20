"use strict";

app.controller("NavCtrl", ($scope) => {
  $scope.navItems = [
  {
    name:"Logout",
    url: "#/logout"
  },
  {
    name:"Add Contact",
    url: "#/contacts/add"
  },
  {
    name:"All Contacts",
    url: "#/contacts/list"
  }
  ];
});