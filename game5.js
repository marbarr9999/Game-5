//
//Setting global variables.
//

//currLoc is a global variable that determines the initial location.
var currLoc=0;
//countzero is a global variable created to determine whether the player has never been in room zero.
var countzero  = false;
//countone is a global variable created to determine whether the player has never been in room one.
var countone  = false;
//counttwo is a global variable created to determine whether the player has never been in room two.
var counttwo  = false;
//countthree is a global variable created to determine whether the player has never been in room three.
var countthree  = false;
//countfour is a global variable created to determine whether the player has never been in room four.
var countfour = false;
//countfive is a global variable created to determine whether the player has never been in room five.
var countfive = false;
//countsix is a global variable created to determine whether the player has never been in room six.
var countsix = false;
//countseven is a global variable created to determine whether the player has never been in room seven.
var countseven = false;
//counteight is a global variable created to determine whether the player has never been in room eight.
var counteight = false;
//countnine is a global variable created to determine whether the player has never been in room nine.
var countnine = false;
//countten is a global variable created to determine whether the player has never been in room ten.
var countten = false;
//healthScore is a global variable representing the score of the player.
var healthScore=0;
//navigationErrorCount is a global variable created to keep track of the amount of "mistakes" that the player commits.
var navigationErrorCount = 0;
//sarcasmThreshold is a global variable created to establish a total amount of "mistakes". When the amount of mistakes is reached, the game will "get sassy".
var sarcasmThreshold = 5;
//itemCount is a global variable created to keep track of the amount of items gathered by the player.
var itemCount=0;
//north is a global variable created to assign a number to North.
var north = 0;
//south is a global variable created to assign a number to South.
var south = 1;
//west is a global variable created to assign a number to West.
var west = 2;
//east is a global variable created to assign a number to East.
var east = 3;
//bag is a global variable (array) created to store the items in the player's inventory.
var bag= [];
//finished is a global variable created to keep track of the fact that the player finished the game.
var finished = 0;
//locArray is a global array that stores the locations.
var locArray = [];
//nav is a global array that stores the directions (with IDs) of the rooms
var nav = [//N  S   E  W
			[7,1,-1,6], // 0
			[0,-1,2,8], // 1
			[5,3,4,1], // 2
			[2,-1,-1,-1], //3
			[-1,-1,-1,2], //4
			[-1,2,-1,-1], //5
			[-1,-1,0,-1], //6
			[-1,0,10,-1], //7
			[-1,9,1,-1], //8
			[8,-1,-1,-1], //9
			[-1,-1,-1,7], //10
			];

			
function tutorial() { //Function tutorial() displays the message that explains the gameplay, to the second text area.
	scrollUp();
	dispMsgSecond("--Tutorial--\n To move through the Map you can:\n   -Use the buttons below.\n   -Type 'n', 's', 'w', or 'e'\n    in the Command Box and click\n    the 'Go' button.\n   -Use the WASD Box to use WASD.\n Go find all the items in order\n  to escape! \n R: To take | SpaceBar: To search\n X: To show the Inventory\n--/Tutorial-- \n \n \n");
}

function locat (newid) { //function locat(newid) takes a parameter, and it is the class for the rooms. It tells the basic attributes of every room.
	this.id = newid;
	this.name = "Room";
	this.description = "It is a room.";
	this.item = "No items.";
	this.toString = function() {
                                 return this.description +
										this.item;
                   }

}

function item () { //function item() takes no parameter, and it is the class for the items. It tells the basic attributes of every item.
	this.name = "Item";
	this.description = " ";
	this.toString = function() {
								return this.name;
								}
}

// These items are outside because they have to be global, they spawn into the room only in a certain case.
function init(){ //init() function takes no parameter. It is the initial function that starts to work as soon as the page is opened, thanks to onload in the body tag in the HTML part of the program. It creates the instances of the rooms and the items.
	
	var knife = new item ();
	knife.name = " Knife";
	
	var mirror = new item();
	mirror.name = " Pieces of Mirror";
	
	var theBathroom = new locat(0);
	theBathroom.description = "You find yourself in a brilliantly shining Bathroom. A harshly blinding light is coming through the window, it is the moonlight. You are still tired and it is hard to see around you. There is a table with what seems to be a knife on it. \n\n"
	theBathroom.name="Kitchen";
	theBathroom.item = knife;
	locArray.push(theKitchen);
	dispMsg("Your name is Alfred. You wake up in the middle of the night and you don't remember anything about your past. You are in a dark house and you have to find a way out of there. Let's go!\n[Starting from: Kitchen]");
	
	var theLvngRoom = new locat(1);
	theLvngRoom.description = "You enter a dark living room. The pavement is extremely wet and slippery. There is a broken mirror on the side. Shards of glass are spread throughout the ground. \n \n \n \n";
	theLvngRoom.name="Living Room";
	theLvngRoom.item = mirror;
	locArray.push(theLvngRoom);
	
	var theKitchen = new locat(2);
	theKitchen.description = "You enter a dark room. It is the Kitchen. A door is on your right... It's strange, it shines a sort of weird blue/dark light. There is a dusty couch and a broken remote controller on the ground. \n \n \n";
	theKitchen.name="Kitchen";
	theKitchen.item = remote;
	locArray.push(theKitchen);
	
	var theBedroom = new locat(3);
	theBedroom.description = "You find yourself in the Bedroom. There's a window! Freedom is finally reality. Now run!\n\nGAME OVER. \n \n \n \n";
	theBedroom.name="Bedroom";
	theBedroom.item = points;
	locArray.push(theBedroom);

	var theOutside = new locat(4);
	theOutside.description = "You find yourself outside. There are a few chairs, time to sitdown?... \n \n \n \n \n";
	theOutside.name="Outside";
	theOutside.item= note;
	locArray.push(theOutside);
	
	var theBalcony = new locat(5);
	theBalcony.description = "You enter an extremely dark balcony. There is a broom and a lot of dust. Spider webs surround the balcony, you better get out of here. \n \n \n";
	theBalcony.name="Balcony";
	locArray.push(theBalcony);
	
	var theGarage= new locat(6);
	theGarage.description = "As soon as you close the door, you find yourself in the cold chill. Fresh air and many trees can be seen through the garage door. There is a creepy little statue on your left, do you want to interact with it? Click Yes or No. \n \n \n";
	theGarage.name="Garage";
	locArray.push(theGarage);
		
	var theCloset = new locat(7);
	theCloset.description = "You enter an extremely dark closet. There is a hammer resting on the wall on the side. \n \n \n";
	theCloset.name="Closet";
	theCloset.item = hammer;
	locArray.push(theCloset);
	
	var theGarden = new locat(8);
	theGarden.description = "You enter a dark garden, the switch for the light is on your right. Do you want to switch the lights on? It may attract attention from outside. Click Yes or No \n \n \n \n";
	theGarden.name="Garden";
	locArray.push(Garden);

	var theBasement = new locat(9);
	theBasement.description = "You close the door behind you and you find yourself in a basement. \n \n \n";
	theBasement.name="Basement";
	locArray.push(theBasement);
	
	var thePorch = new locat(10);
	thePorch.description = "The door behind you shuts by itself. Dirty water is dripping from the ceiling, crashing into the ground. The echo of this sound makes you shiver. A voice in the background starts talking to you.\n Zeus: Welcome to the Porch. Do you wanna play a game?\n \n \n";
	thePorch.name = "Porch";
	locArray.push(Porch);
	
	currLoc = locArray[0].id; //The game starts in the location zero.

	
}

function disable(id) {//disable(id) takes a parameter. It disables a button/txtArea.
	document.getElementById(id).disabled = true;
}

function enable(id) {//enable(id) takes a parameter. It enables a button/txtArea.
	document.getElementById(id).disabled = false;
}

function goNorth (){ //goNorth() takes no parameter. It is used to go North from the current Location.
	nextLoc('n');
}

function goSouth (){ //goNorth() takes no parameter. It is used to go North from the current Location.
	nextLoc('s');
}

function goEast (){ //goNorth() takes no parameter. It is used to go North from the current Location.
	nextLoc('e');
}

function goWest (){ //goNorth() takes no parameter. It is used to go North from the current Location.
	nextLoc('w');
}


function nextLoc (dir) {//nextLoc(dir) takes a parameter. It is used to navigate around the Map.
	scrollUp();
	enable("North");
	enable("South");
	enable("East");
	enable("West");
	var d = -1;
	switch (dir) {
		case 'n': d=0; break;
		case 's': d=1; break;
		case 'e': d=2; break;
		case 'w': d=3; break;
		default: alert ('This should never happen');
	}
	var newLoc = nav[currLoc][d];
	save = newLoc;
	if (newLoc >=0) {
		currLoc = newLoc;
		dispMsg (locArray[currLoc].description);
		document.getElementById("map").src="map" + locArray[currLoc].id + ".png"; 
		if (nav[currLoc][0] === -1 ) {
			disable("North");
		}
		if (nav[currLoc][1] === -1 ) {
			disable("South");
		}
		if (nav[currLoc][2] === -1 ) {
			disable("East");
		}
		if (nav[currLoc][3] === -1 ) {
			disable("West");
		}
	} else { //if you cannot go that way, navigationError() triggers.
		navigationError();
	}
	checkScore();
	var desc ="Score: " + score + "\n";
	dispMsg(desc);
}

function dispMsg(message) { //Function dispMsg(message) displays the message given as input plus the Score in the Main text area. The assignment says that the name should be updateDisplay but I already had the code from Project two full of dispMsg. This comment is done just to notice the reader of the code that dispMsg() is actually updateDisplay().
	var target = document.getElementById("taMain");
	target.value = message + "\n\n" + target.value;
}

function dispMsgSecond(message) { //Function dispMsgSecond(message) takes in a parameter and it displays the message given as input plus the Score in the Second text area.
	var target = document.getElementById("taSecond");
	target.value = message + "\n\n" + target.value;
}

function navigationError() { //function navigationError() takes no parameter. If the value of navigation errors variable is higher than the value of the variable sarcasmThreshold, the 'game' gets "sassy".
	navigationErrorCount = navigationErrorCount + 1; //Every time the player does a mistake, the amount of navigation errors increases by 1.
	if (navigationErrorCount < sarcasmThreshold) {
		dispMsg("You cannot go that way.\nYou are still in the " + locArray[currLoc].name + ".\n\n");
	} else {
		dispMsg("Are you even trying, noob?\nYou are still in the " + locArray[currLoc].name +".\n\n");
	}            
}

function enter_KeyPress(keyboardEvent){//enter_KeyPress(keyboardEvent) takes a parameter. Done for the command Box.
	if(keyboardEvent.which === 13) {//ENTER Key	
		btnGo_click();
	}
}

function btnGo_click() { //function btnGo_click() takes no parameter. It is used to input in the program what the player is typing in the command box.
	var playerinput = document.getElementById("txtCommand").value;
	if ( (playerinput === "n") || (playerinput ==="N") ) {
			goNorth();
		} else {
			if ( (playerinput === "s") || (playerinput ==="S") ) {
			goSouth();
			} else {
				if ( (playerinput === "w") || (playerinput ==="W") ) {
					goWest();
				} else {
					if ( (playerinput === "e") || (playerinput ==="E") ) {
						goEast();
					} else {
						dispMsg("Invalid input. Try n - s - w - e");
					}
			  }
			}	
		}		 
}
}

function txtCommand_keyPress(keyboardEvent){ //function txtCommand_keyPress(keyboardEvent) takes a parameter as input. Depending on the number associated to the key pressed it will refer it to a function. It is a sort of KeyBinding present in many games. It takes in consideration both capital and lower case letters.
	if(currLoc != 3 && keyboardEvent.which === 119 || keyboardEvent.which === 87) {//(W) North key	
		goNorth();
	}
	if(currLoc != 3 && keyboardEvent.which === 115 || keyboardEvent.which === 83) {//(S) South key
		goSouth();
	}
	if(currLoc != 3 && keyboardEvent.which === 97 || keyboardEvent.which === 65) {//(A) West key
		goWest();
	}
	if(currLoc != 3 && keyboardEvent.which === 100 || keyboardEvent.which === 68) {//(D) East key
		goEast();
	}
	if(keyboardEvent.which === 32) {//Space key
		search();
	}
	if(keyboardEvent.which === 114 || keyboardEvent.which === 82) {//Take key
		take();
	}
	if(keyboardEvent.which === 120 || keyboardEvent.which === 88) {//Inventory key
		inventory();
	}
}

function scrollUp () { //ScrollUp() takes no parameter. It scrolls up both Text Areas when something is displayed.
	var textarea = document.getElementById("taMain");
	var textareaScnd = document.getElementById("taSecond");
	textarea.scrollTop = 0;
	textareaScnd.scrollTop = 0;
}

function checkScore() { //Function checkScore() takes no parameter. It checks if the player has ever been in a room before. If he/she has not, the function adds 5 points to the score.
	 if ( (! countzero) && (currLoc === 0) ) {            
		  score = score + 5;
		  countzero = true;
	} else if ( (! countone) && (currLoc === 1) ) {            
		  score = score + 5;
		  countone = true;
	} else if ( (! counttwo) && (currLoc === 2) ) {            
		  score = score + 5;
		  counttwo = true;
	} else if ( (! countthree) && (currLoc === 3) ) {            
		  score = score + 5;
		  countthree = true;
	} else if ( (! countfour) && (currLoc === 4) ) {            
		  score = score + 5;
		  countfour = true;
	} else if ( (! countfive) && (currLoc === 5) ) {            
		  score = score + 5;
		  countfive = true;
	} else if ( (! countsix) && (currLoc === 6) ) {            
		  score = score + 5;
		  countsix = true;
	} else if ( (! countseven) && (currLoc === 7) ) {            
		  score = score + 5;
		  countseven = true;
	} else if ( (! counteight) && (currLoc === 8) ) {            
		  score = score + 5;
		  counteight = true;
	} else if ( (! countnine) && (currLoc === 9) ) {            
		  score = score + 5;
		  countnine = true;
	} else if ( (! countten) && (currLoc === 10) ) {            
		  score = score + 5;
		  countten = true;
	}
}         

function search(){ //search() takes no parameter. It searches the item in the current room.
	scrollUp();
	if (locArray[currLoc].item != undefined) {
		dispMsg("Searched: " + locArray[currLoc].item);
	} else {
		dispMsg("There is nothing to search.");
	}
	if (locArray[currLoc].id===4) {
		dispMsgSecond(locArray[currLoc].item.description);
	}
}

function take() {// take() function takes no parameter. It is used to pick up the item in the room the player is in. It adds the item to the bag (inventory).
	scrollUp();
	if (locArray[currLoc].item != "No items." && locArray[currLoc].item != undefined){
		if (locArray[currLoc].id!=4) {
			if (locArray[currLoc].id===3) {
				score+=5;
			}
			itemCount+=1;
			bag = bag + locArray[currLoc].item + "\n"; //The Project5 asks me to change the way the Items are added to the Inventory by using the .push, but I do not like how it is shown in the textarea when I display the Inventory. So I just used the + to add the item. If I wanted to use the array I should have used ' bag.push(locArray[currLoc].item); '
			dispMsg("Taken: " + locArray[currLoc].item);
			if (locArray[currLoc].item.name === " Scroll") {
				dispMsg("You obtained the Scroll. Click on the button 'Scroll' to read it.");
				document.getElementById("Scroll").style.visibility="visible";
				understandScroll=0;
			}
			delete locArray[currLoc].item;
		} else {
			dispMsg("There is nothing to take.");
		}
	} else {
		dispMsg("There is nothing to take.");
	}
	if (currLoc===3){
		score += 5;
	}
}

function inventory(){ //inventory() takes no parameter. It displays bag (the actual inventory) in the second textarea.
	scrollUp();
	if (bag.length === 0){
		dispMsgSecond("There are no items in your Inventory.");
	} else{
	dispMsgSecond("Inventory: \n" + bag);
	}
}