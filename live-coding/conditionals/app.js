let carModel = "SAAB"; // Före 2016
let carColor = "Silvegrey"; // Efter 2016 (ES6)
let carYear = 2005; // Konstant - kan ej ändras


// Om året är över 2010 OCH car model är SAAB ELLER färgen är grå
// if(carYear > 2010 && carModel == "SAAB" || carColor == "Grey") {
//   console.log("This is a great car! wooh");
// }


// Om året är över 2010 ELLER model är SAAB OCH färger är grå
// if(carYear > 2010 || (carModel == "SAAB" && carColor == "Grey")) {
//   console.log("This is an awesome car!");
// }

// if((carYear > 2010 || carModel == "SAAB") || carColor == "Grey") {
//   console.log("This is the best car ever!");
// }




// Krav för skottår
// 1    - Året är jämnt delbart med 4 (1996, 2000, 2004, 2008, 2012)
// 2    - Året är inte jämnt delbart med 100 (1700, 1800, 1900) är inte ett skottår
// 2.1  - Äret är ett skottår om den är jämnt delbar med 400 
// let year = 1600;

// // Om samtliga krav stämmer, skriv då ut "${year} + " This is a leap year!"

// if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//   console.log(year + " is a leap year");
// }

// if(year % 4 == 0) {
//   if(year % 100 != 0) { // nästlad if är ett "och" villkor
//     console.log(year + " is a leap year");
//   } 
//   else if(year % 400 == 0) { // else if är ett "eller" villkor
//     console.log(year + " is a leap year");
//   }
// }

// if(year % 400 == 0) {
//   console.log(year + " is a leap year");
// } 
// else if(year % 4 == 0) {
//   if(year % 100 != 0) {
//     console.log(year + " is a leap year");
//   }
// }



// Skapa ett program som baserat på år och månad tar fram hur många dagar det är i månaden
let month = 5;
let year = 1996;
let days = 0;

// ex. månad 2, år 1996 --> 29 dagar (skottår)
// månad 5, år 1996 --> 31 dagar
// måndag 6, år 1992 --> 30 dagar


// tips, 
//      Trettio dagar har november, april, juni och september.
//      Februari tjugoåtta allén.
//      Alla övriga trettioen.

if(month == 2) {
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    days = 29;
  } else {
    days = 28;
  }
} else if(month == 4 || month == 6 || month == 9 || month == 11) {
  days = 30;
} else {
  days = 31;
}

console.log("Year: " + year + ", month: " + month + ", days: " + days);


if(month == 2) {
  if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    days = 29;
  } else {
    days = 28;
  }
} else if(month <= 7) {
  days = (month % 2) + 30;
} else {
  days = 31 - (month % 2);
}

console.log("Year: " + year + ", month: " + month + ", days: " + days);


switch (month) {
  case 2:
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      days = 29;
    } else {
      days = 28;
    }
    break;

  case 4: case 6: case 9: case 11:
    days = 30;
    break;

  default:
    days = 31;
    break;
}

console.log("Year: " + year + ", month: " + month + ", days: " + days);