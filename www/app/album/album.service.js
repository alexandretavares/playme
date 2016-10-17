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
            return $q.resolve($filter('limitTo')(albumList, 7));
        };

    }

})();
