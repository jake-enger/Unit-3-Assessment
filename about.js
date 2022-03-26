console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been subitted successfully!');
}

function complimentUser(evt) {
	evt.MouseEvent();

	
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);