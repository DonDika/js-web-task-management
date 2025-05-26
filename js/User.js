// sebagai model, file ini digunakan untuk mengurus bussiness logic

class User {
    
    saveUser(userData){
        const newUser = {
            id: Date.now(),
            ...userData
        };
        console.log(userData);
    }

}