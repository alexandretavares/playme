(function() {
    'use strict';

    angular.module("playme.album").controller("AlbumDetailController", AlbumDetailController);
    AlbumDetailController.$inject = ['$scope', '$stateParams'];

    function AlbumDetailController($scope, $stateParams) {
        var mv = this;

        $scope.$on("$ionicView.enter", function(event, data) {           
            if ($stateParams.album) {
                mv.album = $stateParams.album;
                mv.ratingsObject.rating = mv.album.rating;
            }
        });

        (function() {
            mv.album = {};

            mv.ratingsObject = {
                rating:  0,
                callback: function(rating, index) {}
            };
        })();
    }

})();
