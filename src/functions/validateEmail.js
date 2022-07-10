function validateEmail(email) {
  const regEx = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  try {
    if (!email.match(regEx)) throw 'Invalid email';
    return true;
  } catch (error) {
    console.log(error);
  }
}
export default validateEmail;