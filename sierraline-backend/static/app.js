// static/app.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            // Add your form validation logic here
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');

            if (!emailInput.value || !passwordInput.value) {
                alert('Please fill in all fields');
                event.preventDefault();
            }
		else {
                // If form is valid, send data to the backend using Fetch API
                const formData = new FormData(loginForm);

                fetch('/login', {
                    method: 'POST',
                    body: formData,
                })
                    .then(response => response.json())
                    .then(data => {
                        // Handle the response from the backend
                        if (data.success) {
                            window.location.href = '/dashboard';
                        } else {
                            alert(data.message);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);

                    });

		}
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('orderForm');

    if (orderForm) {
        orderForm.addEventListener('submit', function (event) {
            const itemNameInput = document.getElementById('itemName');
            const deliveryAddressInput = document.getElementById('deliveryAddress');

            if (!itemNameInput.value || !deliveryAddressInput.value) {
                alert('Please fill in all fields');
                event.preventDefault();
            } else {
                // If form is valid, send data to the backend using Fetch API
                const formData = new FormData(orderForm);

                fetch('/place_order', {
                    method: 'POST',
                    body: formData,
                })
                    .then(response => response.json())
                    .then(data => {
                        // Handle the response from the backend
                        if (data.success) {
                            alert(data.message);
                        } else {
                            alert(data.message);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });

	    }
        });
    }
});
