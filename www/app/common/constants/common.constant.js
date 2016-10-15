(function() {
    'use strict';

    angular.module("playme.common").constant("STATE", {
        BASE: "app",
        AUTH: "auth",
        ALBUM: {
            LIST: "app.album-list",
            DETAIL: "app.album-detail",
            FAVORITE: "app.album-favorite"
        }
    });

})();