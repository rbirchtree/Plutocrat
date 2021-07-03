/*
Plutocrat
Goal: $10M in bank by age 65
Defeat: Schizophrenia is caused by stress

Ways to make Money
1. Real Estate (slow but incremental wealth, low stress)
2. Start a business (wealth is sporadic cashflow of large and small value, cost significant stress)
3. Work for the man (wealth is steady but not a lot, low stress)

Stressor for points
-wife
-Kids
-business enviroment

Rewards
-Money Incrementally
-Windfall from business
-Vacation lowers stress
-easy weekend lowers stress

Choices
-Do college
-Marry early
-Inherit $1M
-Lottery $1M
-Move town (Variable for good/bad)
-Work long weekend

Game Play
Intial Set-up -> User Choices for Ways to make money and use vaction time -> Result calculated -> rinse & repeat

save to text file later
*/

let startGame = ()=> {
	character ={
		age:18,
		money:0,
		stress: 0,
		education: 0
	};
	let userInput = prompt("What's your name'?","Pluto");
	character.name = userInput; 
	
	/* while loop for playing !=
	while
	*/
	while ( character.age <= 65){
		/*
		 
		
		easy weekend,
		long weekend, 
		vacation
		userInputs for negative & positive
		*/
		if (character.age < 23){
			education();
		}
		let incomeChoice = prompt("How do you make money? Real Estate-1, Corporate America-2, BizNiz-3","1");
		bizNiz();
		realEstate();
		workForTheMan();


		vacation();
		
		//console.log(character);
		/*
		win conditions less than 65, $10M and less than 100 stress
		break loop
		else if
		loss stress is over 100 or age is greater than 
		*/
		if (character.stress >= 100){
			alert("Game Over! You are committed to a mental institute due to stress.")
			break;
		}
		if (character.money >= 10000000){
			alert("Congratulations! You are a plutocrat!");
			break;
		}
		lottery();
		inheritance();
		var formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		      
			// These options are needed to round to whole numbers if that's what you want.
			//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
			//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
		      });
		      
		      
		let status = alert(` Age:${character.age} Stress:${character.stress} ${formatter.format(character.money)}`)
		status
		character.age++;
	}
}

let lottery = () => {
	var ticket = Math.random();
	if (ticket < .01){
		character.money += 1000000;
		alert("You won the lottery!");
	}
}

let inheritance = () => {
	var estate = Math.random();
	if (estate < .02){
		character.money += 1000000;
		alert("An obscure relative left you a $1M!");
	}
}

let education = () => {
	//age less than 25
	// if user says yes than educate add .01
		if (character.age < 23){
			userInput = prompt("Do you want education?","Y");
		}	
		if (userInput == "Y"){
			character.education+=1;
		}
	
}

let realEstate = () => {
	let rentAndAppreciation = Math.random();
	if ( rentAndAppreciation > .75){
		character.money*1.1
		character.stress+= 10
	} else if (rentAndAppreciation > .5){
		character.money*1.05
		character.stress+= 5
	} else {
		character.money*1.02
		character.stress+= 2	
	}
}

let workForTheMan = () =>{
	let educationExp = (character.education / 100) +1;
	let luck = Math.random();
	if (luck > .75){
		character.money += 70000 * educationExp;
		character.stress+= 2		
	} else if (luck > .5){
		character.money += 50000 * educationExp;
		character.stress++		
	} else {
		character.money += 40000 * educationExp;
	}
}

let vacation = ()=>{
	let userInput = prompt("How do you relax? (1 Vacation (-20 Stress & $5K), 2 Easy Weekend (-10 Stress)","1 or 2");
	if (parseInt(userInput) === 1){
		character.money -= 5000;
		character.stress -= 20;
	} else {
		character.stress -= 10;	
	}
}

let bizNiz = () => {
	let oddsOfSuccess = Math.random();
	character.money-= 50000;
	if (oddsOfSuccess > .75){
		character.money+= 1000000;
		character.stress+= 15;
	} else if (oddsOfSuccess > .5){
		character.money+= 100000;
		character.stress+= 5;	
	} else {
		character.money+= 50000;
		character.stress+= 10;
	}
}

startGame();
/*
character should have kids, money, wife, stress, college and age
*/