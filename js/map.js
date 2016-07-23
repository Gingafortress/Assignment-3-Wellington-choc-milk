window.onload = function() {
	milkMap()
}
function milkMap() {
	var mapContainer = document.getElementById("choc-milk-map")
	var mapOptions = {
		center: new google.maps.LatLng(-41.291113, 174.779552),
		zoom: 11
	}
	var theMap = new google.maps.Map(mapContainer, mapOptions)
	var milkStores = [
		["New World Thordon", -41.273530, 174.778364],
		["New World Island Bay", -41.334524, 174.772616],
		["New World Tawa", -41.169965, 174.826164],
		["New World Hutt City",-41.209019, 174.908054],
		["New World Miramar", -41.315744, 174.814570],
		["New World Railway Metro", -41.279142, 174.780318],
		["Crofton Downs Countdown", -41.257224, 174.765860],
		["Lower Hutt Coutdown", -41.207908, 174.905825],
		["Kilbirnie Countdown", -41.319487, 174.794606]
	];
	var allMarkers = [];
	for( var i=0; i<milkStores.length; i++) {
		var store = milkStores[i];
		var marker = new google.maps.Marker({
			position:new google.maps.LatLng(store[1],store[2]),
			map:theMap,
			title: store[0],
			icon:'img/markers/milk-marker.png'
		});
		allMarkers.push( marker );
		marker.setAnimation(google.maps.Animation.DROP)
	}

	if( navigator.geolocation) {
		navigator.geolocation.getCurrentPosition( function(userLocation){
			console.log(userLocation)
			var latLng = new google.maps.LatLng( userLocation.coords.latitude, userLocation.coords.longitude );
			var marker = new google.maps.Marker({
				position:latLng,
				map:theMap,
				icon: 'img/markers/cow-marker.png'
			});

			marker.setAnimation(google.maps.Animation.BOUNCE)
			theMap.panTo(latLng);
			showClosestMarker( marker, allMarkers );
		});
	} 
}

// function showClosestMarker( userMarker, storeMarkers) {
// 	var theClosestStore;
// 	var theClosestDistance;
// 	for(var i=0; i<storeMarkers.length; i++ ){
// 		var storeToCheck = storeMarkers[i];
// 		var storeLatLng = new google.maps.LatLng(storeToCheck.position.lat(), storeToCheck.position.lng());
// 		var userLatLng = new google.maps.LatLng(userMarker.position.lat(), userMarker.position.lng());
// 		var distance = google.maps.geometry.spherical.computeDistanceBetween( userLatLng, storeLatLng );
// 		console.log(distance);
// 		if( theClosestDistance == undefined ) {
// 			theClosestDistance = distance;
// 			theClosestStore = storeToCheck;
// 		} else if( theClosestDistance > distance ) {
// 			theClosestDistance = distance;
// 			theClosestStore = storeToCheck;
// 		}
// 	}
// 	theClosestStore.setAnimation(google.maps.Animation.BOUNCE)
// 	theClosestStore.setIcon("img/markers/closest-milk-marker.png")
// }


