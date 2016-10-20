(function() {
    'use strict';

    angular.module("playme.album").controller("AlbumListController", AlbumListController);
    AlbumListController.$inject = ['$scope', '$state', 'albumService', 'STATE'];

    function AlbumListController($scope, $state, albumService, STATE) {
        var mv = this;

        mv.goDetail = function(album) {
            $state.go(STATE.ALBUM.DETAIL, { album: album });
        };

        mv.toogleSearch = function() {
            mv.searchEnabled = !mv.searchEnabled;
        };

        mv.doSearch = function() {
            mv.searchText = mv.searchFor;
        };

        mv.refreshList = function() {
            albumService.list()
                .then(function(albums) {
                    mv.albums = albums;
                })
                .catch(function(error) {
                    mv.albums = [];
                });
        };

        $scope.$on("$ionicView.loaded", function(event, data) {
            mv.refreshList();
        });

        $scope.$on("$ionicView.afterLeave", function(event, data) {
            mv.searchEnabled = false;
        });

        (function() {
            mv.albums = [];
            mv.searchText = "";
            mv.searchFor = "";
            mv.searchEnabled = false;
        })();
    }

})();
