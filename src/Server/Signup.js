import {Alert} from 'react-native';
import { Auth } from 'aws-amplify';
const onSignUp=async(email,name,password,phone_number,)=>{
    try {
      const userResponse=await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
          phone_number
        }
      });
      return "signedUp";
    } catch (error) {
      Alert.alert("Oops",error.message)
    }
}
export default onSignUp