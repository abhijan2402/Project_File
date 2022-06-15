import React,{useState,useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions
} from 'react-native';
import { API, Auth, Storage ,graphqlOperation  } from 'aws-amplify';
import 'react-native-gesture-handler';
import * as mutation from '../graphql/mutations'; 
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import signinStyle from '../Styles/signincss';
import Style from '../Styles/Style'
const windowWidth=Dimensions.get('window').width
const Home=({navigation})=>{
  const [list,setList]=useState([]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.title}>{item.description}</Text>
      <TouchableOpacity style={Style.btncontainer} onPress={()=>onDownload(item.id)} >
        <Text style={Style.btnTxt} >Get File</Text>
      </TouchableOpacity>
    </View>
  );
  
  const logOut=async()=>{
    try {
      await Auth.signOut();
      Alert.alert("Sign out");
    } catch (error) {
      Alert.alert("Oops",error.message)
    }
  }

  useEffect(()=>{
    subscribeMessage();
  },[])
  const onDownload=async(filePath)=>{
    try {
      const filePath=await Storage.get(filePath,{ expires:60,level:'public' });
      console.log(filePath);
    } catch (error) {
      console.log(error);
    }
  }
  const subscribeMessage=async()=>{
    try{
      const data= await API.graphql({
        query:subscriptions.onCreateMessage
      })
      .subscribe({
        next: ({ provider, value }) => console.log(value.data.onCreateMessage),
        error: error => console.log(error)
        
    })
    }catch(error){
      console.log(error);
    }
    
  }
  return (
    <View style={Style.container}>
      <Text>Enter a message</Text>
      <TextInput placeholder='Enter Message' 
        keyboardType='visible-password' 
        placeholderTextColor={"black"}
        style={signinStyle.input} 
        onChangeText={(pass)=>setPass(pass)}
      />
      <TouchableOpacity style={Style.btncontainer} onPress={subscribeMessage} >
        <Text style={Style.btnTxt} >Send Message</Text>
      </TouchableOpacity>
      {/* <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
      <TouchableOpacity style={Style.btncontainer} onPress={()=>navigation.navigate('addFile')} >
        <Text style={Style.btnTxt} >Upload Files</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Style.btncontainer} onPress={()=>navigation.navigate('lambda')} >
        <Text style={Style.btnTxt} >Lambda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Style.btncontainer} onPress={logOut} >
        <Text style={Style.btnTxt} >Log Out</Text>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:"center"
    },
    input:{
      width:windowWidth-20,
      height:50,
      backgroundColor:'white',
      color:'black',
      alignSelf:'center',
      marginVertical:10,
      borderColor:'black',
      borderRadius:5,
      borderWidth:2
    },
    item: {
      // padding: 20,
      marginVertical: 8,
      marginHor0izontal: 10,
    },
    title:{
      color:'black'
    }
  });
export default Home;
