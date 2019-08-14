// code for Player object

function Player(name, life){
	this.name = name;
	this.life = life;
	this.mostCommanderDamage = 0;
	this.commanderDamages = {};
	this.counters = {};
}

// source: string, amount: int
Player.prototype.commanderDamage = function(source, amount){
	if(typeof this.commanderDamages[source] === "undefined"){
		this.commanderDamages[source] = amount;
	} else{
		this.commanderDamages[source] += amount;
	}
	// update mostCommanderDamage
	let damages = [];
	for(let key of Object.keys(this.commanderDamages)){
		damages.push(this.commanderDamages[key])
	}
	this.mostCommanderDamage = Math.max(damages)
	this.life -= amount;
}

// source: string, amount: int
Player.prototype.counter = function(kind, amount){
	if(typeof this.counters[kind] === "undefined"){
		this.counters[kind] = amount;
	} else{
		this.counters[kind] += amount;
	}
}

// amount: int
Player.prototype.gain = function(amount){
	this.life += amount;
}
Player.prototype.lose = function(amount){
	this.life -= amount;
}
Player.prototype.set = function(amount){
	this.life = amount;
}

Player.prototype.checkDead = function(){
	if(this.life <= 0 || this.mostCommanderDamage >= 21){
		return true
	} else return false
}

console.log("loaded Player object");