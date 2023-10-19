// let country='Pakistan';
// let continent= 'Asia';
// let population= '1.8';
// console.log('Pakistan')


// let age1 = parseInt(prompt('Enter the value for student 1..'));
// let age2 = parseInt(prompt('Enter the value for student 2..'));
// let age3 = parseInt(prompt('Enter the value for student 3..'));
// let age4 = parseInt(prompt('Enter the value for student 4..'));
// let age5 = parseInt(prompt('Enter the value for student 5..'));
// let age6 = parseInt(prompt('Enter the value for student 6..'));
// let age7 = parseInt(prompt('Enter the value for student 7..'));
// let age8 = parseInt(prompt('Enter the value for student 8..'));
// let age9 = parseInt(prompt('Enter the value for student 9..'));
// let age10 = parseInt(prompt('Enter the value for student 10..'));
// sumAge= age1 + age2 + age3 + age4 + age5 + age6 + age7 + age8 + age9 + age10;
// average = sumAge/10;
// alert(average);


// function show(){
//     var btn=document.getElementById('btn');
//     btn.innerText='this is me';
//     // document.write('Hello Uzair how are you');
//     console.log('this is me');
// }


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//   ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//   alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
//   }
// }

//Clearing the list
// function removeAll(){
//   var lst = document.getElementsByTagName("ul");
//     lst[0].innerHTML = "";
// }