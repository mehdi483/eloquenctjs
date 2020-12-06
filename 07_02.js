function weightedGoalOrientedRobot({place, parcels}, route){
	if(route.length == 0){
		let allPlaces = Object.keys(roadGraph).filter(p => p != place);

		let scoredPlaces = allPlaces.map(p => {
			let pickupCountScore = parcels.filter(parcel => parcel.place == p).length * 5;
			let deliveryCountScore = parcels.filter(parcel => parcel.address == p).length;
			return {place: p, totalScore: deliveryCountScore + pickupCountScore};
		});

		let chosenPlace = scoredPlaces.reduce((p1, p2) => { return p1.totalScore > p2.totalScore ? p1 : p2 }).place;

		route = findRoute(roadGraph, place, chosenPlace);
	}
	return({direction: route[0], memory: route.slice(1)});
}
