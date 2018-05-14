"use strict";
{
    angular
    .module("profile-app")
    .config( function($routeProvider) {
        $routeProvider.when("/profile", {
            template: "<user-profile></user-profile>"
        })
        .when("/edit", {
            template:"<edit-profile></edit-profile>"
        })
        .otherwise({ redirectTo: "/profile" });
    });

}