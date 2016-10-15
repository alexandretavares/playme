(function() {
    'use strict';

    angular.module("playme.album").value("albumList", [
        {
            name: "Apocalyptica",
            band: "Metalica",
            duration: 125,
            raitings: 3,
            image: 'img/ionic.png'
        },
        {
            name: "Equilibrium",
            band: "Sagas",
            duration: 45,
            raitings: 0,
            image: 'img/ionic.png'
        },
        {
            name: "In Extremo",
            band: "Sterneisen",
            duration: 345,
            raitings: 2,
            image: 'img/ionic.png'
        },
        {
            name: "Apocalyptica",
            band: "Wagner Reloaded",
            duration: 645,
            raitings: 4,
            image: 'img/ionic.png'
        }
    ]);

})();
