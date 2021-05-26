"use strict"

init();

function init () {
	fetch("https://jsonplaceholder.typicode.com/todos/1")
		.then(response => response.json())
		.then(json => console.log(json))
}
