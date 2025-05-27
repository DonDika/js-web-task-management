// sebagai model, file ini digunakan untuk mengurus bussiness logic

class User {
    
    constructor() {
        this.users = this.getUsers() || [];
    }


    saveUser(userData){
        const newUser = {
            id: Date.now(),
            ...userData
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users)); 

        return window.location.href = '../js-web-task-management/signin.html';
    }

    // untuk mengambil seluruh data pengguna yg sudah disimpan pada local storage
    getUsers(){
        return JSON.parse(localStorage.getItem('users')) || [];
    }

}