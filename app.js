
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
    let results;
    results = dishes.filter(function(el){
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let mexicanFood = filterExample();
//console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){
    let results;
    results = dishes.filter(function(element){
        if (element.cuisine === "Vegetarian") {
            return true;
        }
        else {
            return false;
        }
    })

    return results;
}

let veggieDishes = problemOne();
//console.log("Vegetarian food from Problem 1", veggieDishes);

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

function problemTwo(cuisineType) {
    let results;
    results = dishes.filter(function(element) {
        if (element.cuisine === cuisineType) {
            return true;
        }
        else {
            return false;
        }
    })

    return results;
}

// let userCuisineType = prompt("Please enter a cuisine type")
// let cuisineDishes = problemTwo(userCuisineType);
//console.log(`Dishes of cuisine type ${userCuisineType} from Problem 2`, cuisineDishes)


//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(){
    let results;
    results = dishes.filter(function(element){
        if (element.cuisine === "Italian" && element.servings > 5) {
            return true;
        }
        else {
            return false;
        }
    })

    return results;
}

let largeItalianDishes = problemThree();
//console.log("Large Italian dishes from Problem 3", largeItalianDishes);


//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function problemFour(){
    let results;
    results = dishes.filter(function(element) {
        if (element.id === element.servings) {
            return true;
        }
        else {
            return false;
        }
    })

    return results;
}

let dishResults = problemFour();
//console.log("Results from Problem Four", dishResults);

//5. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFive() {
    let results;
    results = dishes.filter(function(element) {
        if (element.servings % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    })

    return results;
}

let evenServingsDishes = problemFive();
//console.log("Dishes with even serving numbers from Problem 5", evenServingsDishes);


//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

function problemSix() {
    let results;
    results = dishes.filter(function(element) {
        if (element.ingredients.includes("chickpea")) {
            return true;
        }
        else {
            return false;
        }
    })

    return results;
}

let chickpeaDishes = problemSix();
//console.log("Dishes containing chickpeas from Problem 6", chickpeaDishes);

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

function problemSeven(ingredient) {
    let results;
    results = dishes.filter(function(element) {
        if (element.ingredients.includes(ingredient)) {
            return true;
        }
        else {
            return false;
        }
    })

    return results;
}

// let userIngredient = prompt("Please enter an ingredient");
// let ingredientResults = problemSeven(userIngredient);
//console.log(`Dishes containing ${userIngredient} from Problem 7`, ingredientResults);


//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

function problemEight() {
    let results;
    results = dishes.map(function(element) {
        return element.cuisine;
    })

    return results;
}

let cuisines = problemEight();
//console.log("All cuisine types from Problem 8", cuisines);

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

function problemNine() {
    let results;
    results = dishes.map(function(element) {
        return element.cuisine + ' ' + element.name;
    })

    return results;
}

let cuisineNames = problemNine();
console.log("Dish cuisine and name from Problem 9", cuisineNames);

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]





//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
