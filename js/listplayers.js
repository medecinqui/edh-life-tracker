// code for ListPlayers

function ListPlayers(){
	this.playerObjects = [];
	this.playerNames = [];
}

ListPlayers.prototype.addPlayer = function(player){
	this.playerObjects.push(player);
	this.playerNames.push(player.name);
	return(player)
}

// name: string
ListPlayers.prototype.findPlayer = function(name){
	let index = this.playerNames.findIndex(function(el){return el===name});
	return this.playerObjects[index]
}

// todo
ListPlayers.prototype.findDead = function(){
	
}

console.log("loaded ListPlayers object");