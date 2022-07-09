function ValidatePassword(password){
    const passWordregEx="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
    try {
        if(!password.match(passWordregEx))
            throw "not a strong password";  
        return true;
    } catch (error) {
        console.log(error);
        
    }
}
export default ValidatePassword;