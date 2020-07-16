console.log("LET'S UPGRADE")

// hey guys here we gonna see about some unknown string methods

let str1= "Coimbatore"    //initializing a string
console.log("String 1:",str1)

let str2="Chennai"          //initializing another string
console.log("String 2:",str2)

//STRING METHODS

// concat()
//concatenating two strings 

var concatenatingstrings = str1.concat(str2)
console.log("Conctenated string:",concatenatingstrings)

//fromCharCode()
//Convert a Unicode number into a character 

var unic= String.fromCharCode(76);
console.log("Unicode character:",unic);

//includes()
//to check whether the string contains a specific word
//returns true if it includes the specified string
//else returns false

var ans= str1.includes("at");
console.log("Whether it includes:",ans);

var ans1= str1.includes("dore");
console.log("Whether it includes:",ans1);                  //returns false

//localecompare()
//Compare two strings in the current locale 

var n = str1.localeCompare(str2);
console.log("Comparison of two strings:",n);

//match()
//to search matching string

var res = str1.match(/ato/g);
console.log("String matched:",res);

//repeat() is used for repitition of strings

var repeatstr= str2.repeat(3);
console.log("String repetition:",repeatstr);

//replace()
//to replace a string with another string

var replacestr=str2.replace("Chennai","Madras");
console.log("Replaced string:",replacestr);

// search()
//to search a substring inside a string

var searchstr= str2.search("adra");
console.log("Search string:",searchstr); //returns -1 if the string is not present

//slice()
//to extract specific part of a string

var slicestr=str1.slice(0,7);
console.log("Slicing of string:",slicestr);

//startswith()
//to check whether the string starts with specific string

var startstr= str2.startsWith("Che");
console.log("String starts with che :",startstr);

//substr()
//to extract a substring

var sub=str2.substr(0,4);
console.log("Substring of string:",sub);

//substring
//extracts character from string

var sub1=str1.substring(0,4);
console.log("Substring of string:",sub1);

//trim()
//it trims the extra spaces in the string

var dummystr= "            Happy holidays           "
console.log(dummystr)

var trimstr=dummystr.trim()
console.log("String after trimmed:",trimstr)

//valueOf()
//returns primitive value of string object

var valstr= str1.valueOf()
console.log("Value of a string:",valstr)


