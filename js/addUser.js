// file ini digunakan untuk form handler atau sebagai controller, penguhubung antara UI html dan Model


document.addEventListener('DOMContentLoaded', ()=>{

    // targeting ke id yg ada di html
    const userForm = document.getElementById('userForm');
    const userManager = new User(); //instance dari Model User

    // memberikan sebuah event ketika di-submit
    userForm.addEventListener('submit', (event)=> {
        
        event.preventDefault();

        // mengambil value menggunakan id
        const userData = {
            username: document.getElementById('username').value,
        }

        // lempar data ke Model
        userManager.saveUser(userData);

        console.log('berhasil ter-submit');
    })

});
