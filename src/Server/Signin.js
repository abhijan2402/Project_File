import {Alert} from 'react-native'
import {Auth } from 'aws-amplify'
const onSighIn=async(mail,pass,loading,setLoading)=>{
    if(loading)
      return;
    try {
      setLoading(true);
      const response=await Auth.signIn(mail,pass);
      console.log("Signed in")
      setLoading(false)
    } catch (error) {
    setLoading(false)
      Alert.alert("Oops",error.message);
    }
}
export default onSighIn;