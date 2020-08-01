/**
NAME : ROHIT CHAVAN
DESC : XMLHttpRequest, FETCH API
**/

/**XMLHttpRequest */
let xhr = new XMLHttpRequest();
let url="https://dog.ceo/api/breeds/list/all"
xhr.open("GET",url); //xhr.open(method, URL, [async, user, password])
xhr.send(); // Send the request 

xhr.onload = function() { // wait fro response
  console.log(`Loaded: ${xhr.status} ${xhr.response}`);
};

xhr.onerror = function() { // only triggers if the request couldn't be made at all
  alert(`Network Error`);
};

/** Fetch API */
let key = "8a0dfeb814800ed473e66696409d6cfc";
let fturl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8a0dfeb814800ed473e66696409d6cfc";

fetch(fturl)
.then(resp=>resp.json())
.then(data=>console.log(data));

/*** Cors API */

let corurl = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
let proxy = 'https://cors-anywhere.herokuapp.com/'


fetch(proxy + corurl)
.then(res=>res.json())
.then(data=>console.log(data))

