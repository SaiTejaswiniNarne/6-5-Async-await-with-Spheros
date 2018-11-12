async function startProgram() {
	setMainLed({ r: 155, g: 255, b: 0 });
	await speak('Start of the program', true);
	await roll(56, 136, 3);
	setMainLed({ r: 255, g: 39, b: 226 });
	await speak('delay the minimum time of given', true);
	await delay(Math.min(10, 3));
	await roll(64, 88, 5);
	setHeading(62);
	setMainLed({ r: 255, g: 41, b: 57 });
	setSpeed(241);
	await roll(152, 0, 5);
	await speak('End of the program ', true);
	stopRoll();
}


async function onCollision() {
	await speak('On collision', true);
	await fade({ r: 255, g: 62, b: 54 }, { r: 194, g: 255, b: 9 }, 2);
	setBackLed(114);
	exitProgram();
}
registerEvent(EventType.onCollision, onCollision);

async function onFreefall() {
	await fade({ r: 251, g: 255, b: 254 }, { r: 255, g: 163, b: 48 }, 0);
	await speak('On freefall', true);
	stopRoll();
}
registerEvent(EventType.onFreefall, onFreefall);
