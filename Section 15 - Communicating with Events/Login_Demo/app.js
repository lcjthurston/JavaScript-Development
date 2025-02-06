const btn = document.querySelector('button');
let failedAttempts = 0;
const maxAttempts = 5;

btn.addEventListener('mouseover', function() {
	console.log('MOUSED OVER ME!');
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn.style.left = `${width}px`;
	btn.style.top = `${height}px`;
});

btn.addEventListener('click', function() {
	if (failedAttempts >= maxAttempts) {
		btn.innerText = 'LOCKED OUT';
		btn.disabled = true;
		return;
	}

	const password = prompt('Enter Password:');
	if (password === 'correctpassword') {
		btn.innerText = 'YOU GOT ME!';
		document.body.style.backgroundColor = 'green';
	} else {
		failedAttempts++;
		alert(`Incorrect password! Attempts left: ${maxAttempts - failedAttempts}`);
		if (failedAttempts >= maxAttempts) {
			btn.innerText = 'LOCKED OUT';
			btn.disabled = true;
		}
	}
});
