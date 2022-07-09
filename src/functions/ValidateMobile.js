function ValidateMobile(number) {
    var phoneno = /^(0|\+91)?[789]\d{9}$/;
    try {
        if (!number.match(phoneno))
            throw "phone number is not valid";
        return true;
    } catch (error) {
        console.log(error);

    }
}
export default ValidateMobile;