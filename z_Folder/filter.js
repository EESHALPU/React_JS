var ages=[12,25,17,24,25];

var b=ages.filter(checkAdult)

function checkAdult(age)
{
    return age>=18;
}

console.log(ages);

console.log(ages.indexOf(25));

console.log(b);