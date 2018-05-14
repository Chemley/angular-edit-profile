"use strict";
{
    const userProfile = {
        template: 
        `
            <div>
                <img src={{ $ctrl.userProfile.img }} alt="Grant Chirpus">
            </div>
            
            <section>
                <h2>{{ $ctrl.userProfile.name }}</h2>
                <p>{{ $ctrl.userProfile.email }}</p>
                <p>{{ $ctrl.userProfile.bio }}</p>
            </section>
            
            <div>
                <button ng-click="$ctrl.editProfile();" type="submit">Edit</button>
            </div>
        `,
        
        controller: function(ProfileService, $location) {
            const vm = this;
            // Getting access to the profile service to use in this component
            vm.userProfile = ProfileService.getUserProfile();
            
            vm.editProfile = function() {
            // take the user edit the profile screen. 
                $location.path("/edit");
            }
        
        }

    }


    angular
    .module("profile-app")
    .component("userProfile", userProfile);
}