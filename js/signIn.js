

document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        usernameByInput = document.getElementById('username').value;

        const result = userManager.signInUser(usernameByInput);

        if (result.success) {
            alert('success loggedin');
            localStorage.setItem('usernameLoggedIn', usernameByInput );
            return window.location.href = '../tasks.html';
        } else {
            alert(result.message)
        }
    })

});