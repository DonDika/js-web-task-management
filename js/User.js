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

        //return window.location.href = '../js-web-task-management/signin.html';
        return {
            success: true
        };
    }

    signInUser(usernameByInput){
        //proses pemeriksaan username di localstorage
        const userExists = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());


        // proses pengembalian data ke signin.js
        if (userExists) {
            return {
                success: true,
                username
            }
        } else {
            return {
                success: false,
                message: 'Data tidak ditemukan'
            }
        }
    }

    // untuk mengambil seluruh data pengguna yg sudah disimpan pada local storage
    getUsers(){
        return JSON.parse(localStorage.getItem('users')) || [];
    }

}