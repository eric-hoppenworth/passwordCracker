var password, characters, minimumLength, maximumLength;
function includeUpper(characters){
	for (var i = 65; i<=90;i++){
		characters.push(String.fromCharCode(i))
	}
}
function includeLower(characters){
	for (var i = 97; i<=122;i++){
		characters.push(String.fromCharCode(i))
	}
}
function includeNumbers (characters){
	for (var i = 48; i<=57;i++){
		characters.push(String.fromCharCode(i))
	}
}
function startGuessing(){
	maximumLength = maximumLength < minimumLength ? minimumLength:maximumLength;
	minimumLength = minimumLength > maximumLength ? maximumLength:minimumLength;
	
	if(!minimumLength || minimumLength< 1){
		minimumLength = 1;
	}
	if (!maximumLength || maximumLength > 8){
		maximumLength = 8;
	}
	let start = performance.now();
	let temp = [];
	let word = "";
	let matched = false;
	let count = 0;
	for(let i = 0; i < minimumLength - 1;i++){
		temp.push(0);
	}
	while(matched === false){
		word = temp.map((i)=>characters[i]).join("");
		for(var i = 0 ; i < characters.length; i++){
			let pass = word + characters[i];
			if(pass === password){
				console.log(`the Password was found: '${pass}'`)
				console.log(`it took ${count*characters.length} tries`)
				matched = true;
				break;
			}
		}

		if(temp.length === 0){
			temp.push(0);
		}else{
			for (let i = temp.length - 1; i >= 0; i--) {
				if(i === 0 && temp[i] === characters.length - 1){
					temp = temp.map(()=>0);
					temp.push(0);
				}else if(temp[i] !== characters.length - 1){
					temp[i] ++;
					for(let j = i+1; j < temp.length; j++){
						temp[j] = 0;
					}
					break;
				}
			}
		}
		count++;
		if(count % 10000 === 0){
			console.log(`still Searching....`);
		}
		if(temp.length === maximumLength){
			matched = true;
			console.log(`I gave up after ${count*characters.length} tries`)
		}
	}
	let end = performance.now();
	console.log(`Loop took ${end-start} miliseconds`)
}

// manually choose a password that you want the computer to guess
// you can change the password, but it should always be in quotes
password = "zzaffvvvga"; 
//another example might look like:
// const password = "secret";

//next, we define the available characters we want our algorithm to try
characters = [];
//the next three lines will allow you to choose which characters to use in your guesses
includeLower(characters);
includeNumbers(characters);
includeUpper(characters);


//change these if you would like to specify a particular length for your password.
//the highest maximum you should ever use is 8.  even 8 characters could take HOURS to finish
//more likely, you will want to stick to 5~7
minimumLength = 3;
maximumLength = 8;