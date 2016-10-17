(function() {
    'use strict';

    angular.module("playme.album").controller("AlbumDetailController", AlbumDetailController);
    AlbumDetailController.$inject = ['$scope', '$state', '$stateParams', 'albumService', 'STATE'];

    function AlbumDetailController($scope, $state, $stateParams, albumService, STATE) {
        var mv = this;

        $scope.$on("$ionicView.enter", function (event, data) {           
            if ($stateParams.album) {
                mv.album = $stateParams.album;
                mv.ratingsObject.rating = mv.album.rating;
            }
        });

        (function() {
            mv.album = {};

            mv.ratingsObject = {
                rating:  0,
                callback: function(rating, index) {
                }
            };
        })();
    }

})();
