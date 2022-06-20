console.log('Welcome to this Calorie Tracker!!');
const name = ('Travis');
console.log(`Hello ${name}`);

let calorie = (1600)

function calculate(calorie){ 
    if (calorie >= 1500){
    console.log('You smashed your goal!');
    } else {
        console.log('You did not get your Calorie Goal!');
    };
};

console.log(calculate(calorie));