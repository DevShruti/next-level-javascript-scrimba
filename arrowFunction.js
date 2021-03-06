//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}


const dinnerMenu = () => {
    return "I'm going to eat a burger for dinner";
}

console.log( dinnerMenu() );




const dinnerMenu = (food) => {
    return `I'm going to eat a ${food} for dinner`;
}

console.log( dinnerMenu("chicken salad") );



const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner`;

console.log( dinnerMenu("chicken salad") );



const dinnerMenu = food => `I'm going to eat a ${food} for dinner`;

console.log( dinnerMenu("chicken salad") );