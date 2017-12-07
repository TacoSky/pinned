(function() {
    'use strict';

    class MapView {
        constructor(id) {
            this.id = id;
        }
        initMap() {
            this.map = new google.maps.Map(document.getElementById(this.id), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            });
        }
    }

    var ctrlMap = new MapView('map');
    console.log("test1");
})();

    console.log("test2");

