"use strict";
exports.__esModule = true;
/*
 * We can get, create, append, or remove HTML elements using JavaScript
 * Selecting HTML elements via JavaScript is similar to selecting using CSS
 * To select a HTML elemnt, we use tag name, id, class name, or other attributes
 */
var allTitles = document.getElementsByTagName('h1');
console.log(allTitles);
console.log(allTitles.length);
for (var i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]);
}
// Right-click on main.html and start live server. 
// Then, copy-paste the compiled main.js into console.
var allTitles2 = document.getElementsByClassName('title');
console.log(allTitles2);
console.log(allTitles2.length);
for (var i = 0; i < allTitles2.length; i++) {
    console.log(allTitles2[i]);
}
var firstTitle = document.getElementById('first-title');
console.log(firstTitle);
// querySelector() can select HTML element by tag name, id, or class name.
// It only returns the first element
var firstTitle2 = document.querySelector('h1');
var firstTitle3 = document.querySelector('#first-title');
var firstTitle4 = document.querySelector('.title');
console.log(firstTitle2, firstTitle3, firstTitle4);
// querySelectorAll() used to select html element by tag name or class
var allTitles3 = document.querySelectorAll('h1');
console.log(allTitles3.length); // 4
for (var i = 0; i < allTitles3.length; i++) {
    console.log(allTitles3[i]);
}
// Adding attributes
var titles = document.querySelectorAll('h1');
titles[3].className = 'title';
titles[3].id = 'forth-title';
titles[3].textContent = 'Forth Title'; // Needs textContent to show up
// titles[3].setAttribute('class', 'title')
// titles[3].setAttribute('id', 'fourth-title')
// Add style
console.log(titles);
titles.forEach(function (title, i) {
    title.style.fontSize = '24px';
    if (i % 2 === 0) {
        title.style.color = 'green';
    }
    else {
        title.style.color = 'red';
    }
});
