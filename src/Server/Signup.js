import {Alert} from 'react-native';
import { API, Auth } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
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
      const userTableData=await API.graphql({
        query:mutations.createUser,
        variables:{
          input:{
            email:email,
            name:name,
            password:password,
            phoneNumber:phone_number
          }
        }
      })
      return "signedUp";
    } catch (error) {
      Alert.alert("Oops",error)
    }
}
export default onSignUp