let dayNumber = 5;
let result ;

dayNumber == 0 ? result = (`This is Sunday.`)
: dayNumber == 1 ? result = (`This is Monday.`)
: dayNumber == 2 ? result = (`This is Tuesday.`)
: dayNumber == 3 ? result = (`This is Wednesday.`)
: dayNumber == 4 ? result = (`This is Thursday.`)
: dayNumber == 5 ? result = (`This is Friday.`)
: dayNumber == 6 ? result = (`This is Saturday.`)
: result = (`Invalid day number.`);
console.log(dayNumber, result);
