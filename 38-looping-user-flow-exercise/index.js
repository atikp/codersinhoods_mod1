// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require('readline-sync');

let selectedItems = {
	book: "",
	movie: "",
	nextTrip: ""
};

const movies = [
	"The Invisible Man",
	"Never Rarely Sometimes Always",
	"Gretel & Hansel",
	"No time to die",
	"Bloodshot",
	"Onward",
	"Sonic"
];

const books = [
	"My Dark Vanessa",
	"Uncanny Valley",
	"Weather",
	"The night watchman",
	"All adults here",
	"Dear Edward",
	"Grown ups"
];

const countries = [
	"Italy",
	"France",
	"Germany",
	"Spain",
	"Portugal",
	"Denmark",
	"Netherland"
];

let user = {};
/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
const Books = () => {
	const book = readlineSync.keyInSelect(books, 'Pick a Book',{cancel: 'Back to Main Menu'});
if(books[book] == undefined){
	menu();
} else {
	user["book"] = books[book];
}

menu();
}
/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */
const Movies = () => {
	const movie = readlineSync.keyInSelect(movies, 'Pick a Movie',{cancel: 'Back to Main Menu'});
if(movies[movie] == undefined){
	menu();
} else {
	user["movie"] = movies[movie];
}
menu()

}
/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
const Next_Destination = () => {
	const destination = readlineSync.keyInSelect(countries, 'Pick Next Destination',{cancel: 'Back to Main Menu'});
	if(countries[destination] == undefined){
		menu();
	} else {
		user["nextTrip"] = countries[destination];
	}
	
	menu();
}
/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */


const menu = () => {
	const topMenu = ['Books', 'Movies', 'Next Destination'];
	const choice =readlineSync.keyInSelect(topMenu, 'Choose One: ',{cancel: 'EXIT'});

	switch(topMenu[choice]) {
		case 'Books':
			Books();
			break;
		case 'Movies':
			Movies();
			break;
		case 'Next Destination':
			Next_Destination();
			break;
		case undefined:
			console.log(user);
		}
	}


menu();