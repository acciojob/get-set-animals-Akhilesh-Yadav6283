//complete this code
class Animal {
	constructor(species){
		 this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log("animal sound");
		}
}
class Dog extends Animal {
	bark(){
		console.log("woof");
	}
	makeSound(){
		cosole.log("woof");
	}
}
class Cat extends Animal {
	purr(){
		console.log("purr");
	}	
	makeSound(){
		console.log("meow");
		}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
