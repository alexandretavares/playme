(function() {
    'use strict';

    angular.module("playme.album").service("albumService", AlbumService);
    AlbumService.$inject = ['$q', '$filter', 'albumList'];

    function AlbumService($q, $filter, albumList) {
        var that = this;

        this.list = function() {
            return $q(function(resolve, reject) {
                setTimeout(function() {
                    resolve(angular.copy(albumList));
                }, 2);    
            });
        };

        this.favorites = function() {
            var albums = [];
            
            for (var i = 0; i < 5; i++) {
                albums.push({ name: "Name " + i, band: "Band " + i, src: "img/ionic.png" });
            }

            // return $q.resolve($filter('limitTo')(albumList, 3));
            return $q.resolve(albums);
        };

    }

})();
