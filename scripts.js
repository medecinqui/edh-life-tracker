/*
players = new ListPlayers();
andy = new Player("andy", 40)
players.addPlayer(andy)
players.findPlayer("andy").commanderDamage("noe", 20)
console.log(players.findPlayer("andy"))
*/
let players;
let consoleElement = document.getElementById("console");
let logElement = document.getElementById("log");
let containerElement = document.getElementById("player-container")

consoleElement.addEventListener("keydown", function(event){
	if(event.key === "Enter"){
		event.preventDefault();
		consoleStr = consoleElement.value;
		consoleElement.value = "";
		
		validCommand = parseCommand(consoleStr);
		if(validCommand){
			logElement.innerHTML += "<br>" + consoleStr;
			updatePlayers();
		} else{
			logElement.innerHTML += "<br>" + consoleStr + " is an invalid command";
		}
	}
});

updatePlayers = function(){
	playerHTML = [];
	
	for(let player of players.playerObjects){
		playerHTML.push(generatePlayerHTML(player));
	}
	containerElement.innerHTML = playerHTML.join();
}

generatePlayerHTML = function(player){
	return "<div class='player' id='" + player.name + "'>" 
	+ "<h1>" + player.name + "</h1>"
	+ "<h2>" + player.life + "</h2>"
	+ generateCommanderHTML(player)
	+ generateCounterHTML(player)
	+ "</div>"
}

generateCommanderHTML = function(player){
	let str;
	if(Object.keys(player.commanderDamages).length === 0){
		str = "";
	} else{
		str = [];
		for(let key in player.commanderDamages){
			str.push("<br>", key, ": ", player.commanderDamages[key].toString(10))
		}
		str = "Commander" + str.join("");
	}
	return str;
}

generateCounterHTML = function(player){
	let str;
	if(Object.keys(player.counters).length === 0){
		str = "";
	} else{
		str = [];
		for(let key in player.counters){
			str.push("<br>", key, ": ", player.counters[key].toString(10))
		}
		str = "Counters" + str.join("");
	}
	return str;
}

console.log("loaded scripts");