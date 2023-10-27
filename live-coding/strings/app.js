let address = "     Eriksberg 3B";

console.log(address.trim());
console.log(address);

address = address.trim(); // tar bort whitespaces i slutet och början av en text

console.log(address);

address = address.replace(" ", ""); // tar bort alla whitespaces

console.log(address);

address = address.replace("berg", "vägen "); // ersätter berg med vägen

console.log(address);



let url = "https://www.google.com:443/search?q=cats";

// url = url.replace("www.", "");
// url = url.replace(":443", "");

let wwwIndex = url.indexOf("www.");

console.log(wwwIndex);

url = url.slice(wwwIndex); // tar en substring från index till slut

console.log(url);

let portIndex = url.indexOf(":443");

url = url.slice(0, portIndex); // tar en substring från början till index

console.log(url);

if(url.indexOf("https://") == -1) { // -1 betyder att teten inte finns
  console.log("Domain does not exist");
}

if(url.includes("/search")) {
  console.log("Url is a search url");
} else {
  console.log("Url is not a search url");
}