console.log('-----------Welcome to this Calorie Tracker!!----------');
const name = ('Travis');
console.log(`Hello ${name}`);

/* -----------Var's for calories/junkfood and working out----------- */
const junk = (8);
let calorie = (1600)

function calculate(calorie){ 
    if (calorie >= 1500){
        return console.log('You smashed your goal!');
    } else {
        return console.log('You did not get your Calorie Goal!');
    };
};

function fat(junk){
    if (junk >= 6){
        return console.log('You had to much junk food!!');
    } else {
        return console.log('You could have another treat!!');
    };
};
calculate();
fat();
console.log(calculate(calorie));
console.log(fat(junk));
