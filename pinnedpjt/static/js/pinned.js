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
            disableDefaultUI: true,
            gestureHandling: "greedy",
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
        var hnav = $('.naviarea').height();
        var hfoot = $('.footerarea').height();
        $("#"+this.divid).css('height', (hwin - hnav - hfoot - 2) + "px");
        $(".gm-svpc").css('visibility',"hidden")
        $("#gmnoprint").css('visibility',"hidden")
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

