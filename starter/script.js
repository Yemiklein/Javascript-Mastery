// let js = 'amazing'
// console.log(40 + 8 + 23 - 10);

// let firstName = 'yemrad';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


// let country = 'Nigeria'
// const continent = 'Africa'
// let population = 200000000
// const isIsland = false
// let language = 'English'
// let description = "Nigeria is in Africa, and it's 200000000 people speaks English"

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);
// console.log(description);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// let ageRaji = 2022 - 1986
// let ageYemi = 2022 - 1966

// console.log(ageRaji, ageYemi);

// let firstName = 'Adeyemi'
// let lastName = 'Raji'
// console.log(firstName + ' ' + lastName);

// const firstName = 'Adeyemi'
// const job = 'Software Engineer'
// const birthYear = 1988;
// const currentYear = 2022

// const yemi = `I'm ${firstName} a ${currentYear - birthYear} year old ${job}!`
// console.log(yemi);
// console.log(`thanking God for life i can't explain`)
// console.log(`javascript string \n\ with multiple \n\ lines sucks`)

// const age = 16;

// if (age >= 18) {
//   console.log('Farah can start driving license 🚗') 
// } else {
//     const yearLeft = 18 - age;
//     console.log(`Farah is still a minor. Wait another ${yearLeft} years and try again `)
// }

// const birthYear = 1988;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century )    
// console.log(`I was born in the ${century}th century`)               

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);



// const avgDolphin = (96 + 108 + 89) / 3;
// const avgKoalas = (97 + 112 + 101) / 3;

// console.log(avgDolphin, avgKoalas);

// if (avgDolphin > avgKoalas && avgDolphin >= 100) {
//     console.log(`Dolphins win the trophy 🏆`);
// } else if (avgKoalas > avgDolphin && avgKoalas >= 100) {
//     console.log(`Koalas win the trophy 🏆`);
// } else if (avgDolphin === avgKoalas && avgDolphin >= 100 && avgKoalas >= 100) {
//     console.log(`Match ended in stalemate and no clear winner🏆`);
// } else {
//     console.log(`No team wins the trophy 🏆`);
// }


//  const day = 'wednesday';

//  switch (day) {
//     case 'monday':
//         console.log('Breakfast is yam and egg');
//         console.log('Lunch is rice and beans with chicken');
//         console.log('Dinner is rice and stew');
//         break;
//     case 'tuesday':
//         console.log('Breakfast is bread and egg');
//         console.log('Lunch is rice and beans');
//         console.log('Poundoyam with egusi soup');
//         break;
//     case 'wednesday':
//         console.log('Breakfast is jollof rice and turkey');
//         console.log('Eba and oha soup');
//         console.log('plantain and vegetable');
//         break;
//     case 'thursday':
//         console.log('Breakfast is beans and plantain');
//         console.log('Lunch is rice and beans');
//         console.log('Dinner is semovita and efo riro');
//         break;
//     case 'friday':
//         console.log('Breakfast is bread and egg');
//         console.log('Lunch is amala and ewedu');
//         console.log('Dinner is rice and stew');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Breakfast is pap and akara');
//         console.log('Lunch is rice and beans');
//         console.log('Dinner is rice and stew');
//         break;
//     default:
//         console.log('Not a valid day');
//  }


const day = 'tuesday'

if (day === 'monday') {
    console.log('Prepare semo and egusi for dinner')
} else if (day === 'tuesday') {
    console.log('Prepare rice and beans for dinner')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Prepare amala and ewedu for dinner')
} else if (day === 'friday') {
    console.log('Prepare rice and stew for dinner')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Prepare rice and beans for dinner')
} else {
    console.log('Not a valid day')
}