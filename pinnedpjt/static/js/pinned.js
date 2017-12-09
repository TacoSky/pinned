'use strict';

/*
 * global object
 */
var ctrlMap;
var dictPins = [];

/*
 * class
 */
class MapView {

    constructor(id) {
        this.divid = id;
        if (0 != dictPins.length ){
            this.center = new google.maps.LatLng(dictPins[0].lat, dictPins[0].lng);
        }
        else{
            this.center = new google.maps.LatLng(-33, 151);
        }

        this.map = new google.maps.Map(document.getElementById(id), {
            center: this.center,
            zoom: 8,
        });


        this.Markers = [];
        dictPins.forEach(function(pin) {
            this.Markers.push(new google.maps.Marker({
                position: {lat: pin.lat, lng: pin.lng},
                map: this.map,
            }));
        }, this);

        this.adjust();
    }
    adjust(){
        var hwin = $(window).height();
        var hnav = $('.nav-wrapper').height();
        $("#"+this.divid).css('height', (hwin - hnav - 2) + "px"); //可変部分の高さを適用
    }
}

class PinnedLocation {
    constructor(pname, plat, plng) {
        this.name = pname;
        this.lat = plat;
        this.lng = plng;
    }
}

/*
 * call back
 */
function cbInitMap(){
    ctrlMap = new MapView('map');
}

/*
 * call method
 */
$(window).on('resize', function(){
      ctrlMap.adjust();
})

