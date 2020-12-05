function compareRobots(robot1, memory1, robot2, memory2, testCount = 100){
	let robot1TotalSteps = 0;
	let robot2TotalSteps = 0;

	for(let i = 0; i < testCount; i++){
		let villageState = VillageState.random();
		robot1TotalSteps += countRobotSteps(villageState, robot1, memory1);
		robot2TotalSteps += countRobotSteps(villageState, robot2, memory2);
	}

	console.log(`Robot1 average steps: ${robot1TotalSteps / testCount}`);
	console.log(`Robot2 average steps: ${robot2TotalSteps / testCount}`);
}

function countRobotSteps(state, robot, memory){
	for(let turn = 0; ; turn++){
		if(state.parcels.length == 0){
			return turn;
		}
		else{
			let action = robot(state, memory);
			state = state.move(action.direction);
			memory = action.memory;
		}
	}
}
