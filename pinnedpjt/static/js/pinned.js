
'use strict';

/*
 * global object
 */
var ctrlMap;

/*
 * class
 */
class MapView {
    constructor(id) {
        this.divid = id;
        this.map = new google.maps.Map(document.getElementById(id), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
        this.adjust();
    }
    adjust(){
        var hwin = $(window).height();
        var hnav = $('.nav-wrapper').height();
        $("#"+this.divid).css('height', (hwin - hnav - 2) + "px"); //可変部分の高さを適用
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

