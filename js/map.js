function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(59.938843, 30.319944),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);  
    var marker = new google.maps.Marker({
        position: {lat: 59.938741, lng: 30.323388},
        icon: "img/pin.png"
    });

    marker.setMap(map);  

    google.maps.event.addListener(marker,'click',function() {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
    });
}
    
google.maps.event.addDomListener(window, 'load', initialize);    