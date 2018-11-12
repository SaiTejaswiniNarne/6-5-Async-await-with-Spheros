async function startProgram() {
	await roll(90, 255, 2);
	await speak('Welcome BearCat', true);
	setMainLed({ r: 0, g: 100, b: 0 });
	await delay(3);
	await speak('Hi Harika', true);
	setMainLed({ r: 255, g: 0, b: 0 });
	await delay(1);
	await speak('Have a nice day!!!', true);
	await Sound.Storytelling.ComedyBegin.play(true);
	setSpeed(0);
	stopRoll();
}