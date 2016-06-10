var iceCream = ['vanilla', 'strawberry', 'pistachio'];

iceCream.push('chocolate');

var president1 = {
    firstName: 'Barack',
    lastName: 'Obama',
    termLength: 2,
    party: 'Democrat',
    yearsOfPresidency: 8
};

var president2 = {
    firstName: 'George',
    lastName: 'Bush',
    termLength: 2,
    party: 'Republican',
    yearsOfPresidency: 8
};

var president3 = {
    firstName: 'Bill',
    lastName: 'Clinton',
    termLength: 2,
    party: 'Democrat',
    yearsOfPresidency: 8
};

var president4 = {
    firstName: 'George',
    lastName: 'Bush Sr.',
    termLength: 1,
    party: 'Republican',
    yearsOfPresidency: 4
};

var president5 = {
    firstName: 'Ronald',
    lastName: 'Reagan',
    termLength: 2,
    party: 'Republican',
    yearsOfPresidency: 8
};

var presidents = [president1, president2, president3, president4, president5];

console.log(presidents[2].firstName + ' ' + presidents[2].lastName);
