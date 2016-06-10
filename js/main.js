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

function howdy() {
    return 'Angelo Maramara says hi!';
}

howdy();

console.log(howdy());

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log('I\'m sorry, but that\'s too many to count.');
    } else if (string.length === 7) {
        console.log('7, what a perfect choice!');
    }
};

numba('7');
numba('seventy');
numba('university');

function inception(display, favMovie) {
    display(favMovie);
}

var message = function display(favMovie) {
    console.log(favMovie + ' is a fantastic movie!');
};

inception(message, 'Avengers');
