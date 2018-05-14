"use strict" 
{
    const ProfileService = function() {
        let userProfile = {
            name: "Grant Chirpus",
            email: "grant@grandcircus.co",
            bio: "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS.",
            img: ""
        };
        
        const getUserProfile = function() {
            return userProfile;
        };

        const setUserProfile = function(updatedInfo) {
            userProfile = updatedInfo;
        };

        return {
            getUserProfile,
            setUserProfile
        } 
    
    }


    angular
    .module("profile-app")
    .service("ProfileService", ProfileService)
}