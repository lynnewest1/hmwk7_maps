var locations = [
    [
        "David Strong Building",
        48.464801,
         -123.313539
    ],
    [
    		"University Centre",
        48.465043,
        -123.311445
  ],
[

					"Bibliocafe",
        48.463436,
        -123.309936    
        ],
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) { 
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2], locations [i][3]),
        map: map
      });

google.maps.event.addListener(marker,
      'click', (function(marker, i) {
      return function() {
      	infowindow.setContent(locations[i]
        [0]);
       		 infowindow.open(map, marker);
           }
        })(marker, i));
    }
      	
   