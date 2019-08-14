
parseCommand = function(str){
	splitstr = str.split(" ");
	if(splitstr[0] === "init"){
		splitstr.shift();
		return initializeGame(splitstr);
	} else if (splitstr[0] === "everyonebut"){
		// to be implemented later
		splitstr.shift()
		return everyoneBut(splitstr);
	} else if (players.playerNames.indexOf(splitstr[0]) > -1 ){
		return playerAction(splitstr);
	} else{
		return false;
	}
}

// str: [string]
initializeGame = function(str){
	// blank out last game's information
	document.getElementById("log").innerHTML = "";
	players = new ListPlayers();
	
	life = Number(str[str.length-1]);
	if(isNaN(life)){
		return false;
	} else{
		str.pop();
		for(let name of str){
			players.addPlayer(new Player(name, life));
		}
	}
	return true;
}

// str: [string]
playerAction = function(str){
	if(str[1] === "to"){
		players.findPlayer(str[2]).commanderDamage(str[0], Number(str[3]));
		return true;
	}
	else if(["lose", "gain", "set"].indexOf(str[1]) > -1){
		if(str.length === 4){
			let evalStr = "players.findPlayer(str[0])."+str[1]+"("+str[2]+", '"+str[3]+"')";
			eval(evalStr);
			console.log(evalStr)
			return true;
		} else{
			let evalStr = "players.findPlayer(str[0])."+str[1]+"("+str[2]+")";
			eval(evalStr);
			return true;
		}
	} else{
		let partialStr = str.slice(0,str.length-2);
		let matches = partialStr.map(x => players.playerNames.indexOf(x) > -1);
		if(matches.every(function(x){return x})){
			for(let name of partialStr){
				let evalStr = "players.findPlayer(name)."+str[str.length-2]+"("+str[str.length-1]+")";
				eval(evalStr);
			}
			return true;
		}
		return false;
	}
}

console.log("loaded Game object");

/*
# random text in here

## commander life tracker project
display name + life total + etc
display misc properties of the table if desired
text interface
	parse commands e.g.
	init noe andy ruben fabian mario darwin eman 40
	noe lose 10
	andy gain 5
	andy set 10
	andy to noe 10
	# everyonebut noe lose 10
	# noe gain 1 experience
	
	keywords:
		special:
			init
				delete old board, make new board
				options for: player names, bg color
			everyonebut
				the first word after everyonebut should be a string - if it's a string again that's not a modifier, it's another person who's an exception
		modifier: gain lose set
		special modifier: to (which means commander)
console history

# everyonebut
# counters
# colors
# ui sucks

*/