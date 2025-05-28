

document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        usernameByInput = document.getElementById('username').value;

        const result = userManager.signInUser(usernameByInput);

        if (result.success) {
            alert('success loggedin');
        } else {
            alert(result.message)
        }
    })

});