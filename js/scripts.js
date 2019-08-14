
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
	containerElement.innerHTML = playerHTML.join("");
}

generatePlayerHTML = function(player){
	let deadStr = ""
	if(player.checkDead()){
		deadStr = " dead";
	}
	return "<div class='player"+ deadStr + "' id='" + player.name + "'>" 
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
		str = "commander" + str.join("");
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
			if(player.counters[key] !== 0) str.push("<br>", key, ": ", player.counters[key].toString(10));
		}
		if(str.length === 0) return "";
		str = "counters" + str.join("");
	}
	return str;
}

parseCommand("init andy noe eman 40");
parseCommand("noe lose 10");
parseCommand("eman set 10")
parseCommand("andy to noe 10");
parseCommand("noe andy lose 10");
parseCommand("eman gain 10 poison")
updatePlayers();
logElement.innerHTML = "Sample commands: <br>\
		init noe andy eman 40 <br>\
		^ that's how you start a game. <br>\
		noe lose 10 <br>\
		andy gain 5 <br>\
		eman set 10 <br>\
		andy to noe 10 <br>\
		^ that's how you do commander damage. <br>\
		noe andy lose 10 <br>\
		^ you can make multiple people lose, gain, or set life totals <br>\
		eman gain 10 poison <br>\
		^ and you can get counters too\
		see eman died";

console.log("loaded scripts");