"use strict";
{
    const editProfile = {
        template: 
        `
            <div>
                <p>Use the form below to edit your profile.</p>
                <form ng-submit="$ctrl.newInfo($ctrl.userProfile)">
                    <p>Name</p>
                    <input ng-model="$ctrl.userProfile.name" value="$ctrl.userProfile.name"></input>
                    <p>Contact</p>
                    <input ng-model="$ctrl.userProfile.email" value="$ctrl.userProfile.email"></input>
                    <p>Bio</p>
                    <textarea ng-model="$ctrl.userProfile.bio">{{ $ctrl.userProfile.bio }}</textarea>
                    <button type="submit">Update</button>
                </form>
            </div> 
        `,
// controllers are class and angular makes a new instance of this class.
        controller: function(ProfileService, $location) {
            const vm = this;

            // goes to the profile service and gets the user profile data and declaires it as this.userProfile
            vm.userProfile = ProfileService.getUserProfile();
            console.log(vm.userProfile);
           
            // When submit (update) is clicked, update the userProfile object.
            vm.newInfo = function(updatedInfo) {
                ProfileService.setUserProfile(updatedInfo);
                console.log(updatedInfo);
            // take the user back to the profile screen. 
                $location.path("/profile");

            
            }
           
        }
    }

    angular
    .module("profile-app")
    .component("editProfile", editProfile);
}