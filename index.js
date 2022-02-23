name = "serkan";

console.log(name.length);

var last_2_characters = name.slice(4,6);


console.log(last_2_characters);


var data = prompt("Enter data");
console.log(data);

function bmiCalculator(weight, height){
    return weight / Math.pow(height, 2);
}

var bmi = bmiCalculator(65, 1.8);

var list_of_ppl = []
list_of_ppl.push("serkan");
list_of_ppl.push("bayram");
list_of_ppl.push("ahmet");

console.log(list_of_ppl.toString())

console.log(list_of_ppl)

console.log(list_of_ppl.includes("ahmet"))

for(var i = 0; i<list_of_ppl.length; i++){
    console.log(list_of_ppl[i]);
}

for (var person of list_of_ppl){
    console.log(person);
}

list_of_ppl.forEach(item => console.log(item));


// DOM


var all_page = document.firstElementChild; // HTML Tag
var body = document.firstElementChild.lastElementChild;
console.log(body);

document.querySelector("h1").innerText = "Serkan BAYRAM";
document.querySelector("h1").innerHTML = "<p>BAYRAM</p>";

document.querySelector("h1").style = "color: red;";
document.querySelector("#second_title").style = "color: purple;";
document.querySelector("#second_title").style.backgroundColor = "yellow";
document.querySelector("#info p").style = "color: red;";
document.querySelectorAll("#info .p-info")[1].style = "color: yellow;";

var class_list = document.querySelector("#p-name").classList;
console.log(class_list);
document.querySelector("#p-name").classList.add('reSize'); // what will do is <p class="p-info reSize"></p>

var attr = document.querySelector("a").getAttribute('href'); 
console.log(attr);

document.querySelector("a").innerText = "YOUTUBE";
document.querySelector("a").setAttribute('href', 'www.youtube.com');

