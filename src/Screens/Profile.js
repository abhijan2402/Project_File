import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Modal
} from 'react-native';
import ProfileStyle from '../Styles/ProfileStyle';
import LinearGradient from 'react-native-linear-gradient';
import { Auth } from 'aws-amplify';
const Profile=()=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [name,setName]=useState("Chirag Tak");
    const [mail,setMail]=useState("takchirag828@gmail.com");
    const [phone,setPhone]=useState('12346579');
    useEffect(()=>{
        fetchUser()
    },[])
    const fetchUser=async()=>{
        try {
            const authedUser=await Auth.currentAuthenticatedUser();
            setName(authedUser.attributes.name)
            setMail(authedUser.attributes.email)
            setPhone(authedUser.attributes.phone_number)
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <ImageBackground  style={ProfileStyle.container}
            source={require('../Assets/background.png')} 
            resizeMode="cover"
        >
            <LinearGradient colors={['#FFFFFF', '#F7C4A4', '#FF7400']} style={ProfileStyle.profileCard}>
                <View style={ProfileStyle.imageView}>
                    <Image
                        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7imXJMeK9b42t8JBjKxYP2zJd8MVrbVNEAg&usqp=CAU"}}
                        style={ProfileStyle.adminImage}
                    />
                </View>
                <View style={ProfileStyle.details}>
                    <View style={ProfileStyle.nameIcon}>
                        <Text style={ProfileStyle.txtColor}>{name}</Text>
                    </View>
                    
                    <View style={ProfileStyle.nameIcon}>
                        <Text style={ProfileStyle.txtColor}>{mail}</Text>
                    </View>
                    <View style={ProfileStyle.nameIcon}>
                        <Text style={ProfileStyle.txtColor}>{phone}</Text>
                    </View>
                </View>
            </LinearGradient>
            <LinearGradient colors={['#FF7400','#FC8521', '#FA943E']} style={ProfileStyle.customButton}>
                <TouchableOpacity >
                    <Text style={ProfileStyle.txt}>Remove Account</Text>
                </TouchableOpacity>
            </LinearGradient>
            <View style={ProfileStyle.floatingButton}>
                    <TouchableOpacity onPress={()=>setModalVisible(true)}>
                        <Image
                            source={require("../Assets/edit1.png")}
                            style={ProfileStyle.icon}
                        />
                    </TouchableOpacity>
            </View>
            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <View style={{backgroundColor:'#000000aa',flex:1,justifyContent:'flex-end'}}>
                    <LinearGradient 
                        colors={['#FFFFFF', '#F7C4A4', '#FF7400']} 
                        style={ProfileStyle.modalStyle}>
                        <Text style={ProfileStyle.modalTxt}>
                            Edit You Profile
                        </Text>
                        <View>
                            <TextInput
                                placeholder='Enter New Name'
                                placeholderTextColor={"black"}
                                style={ProfileStyle.input}
                                onChangeText={(name)=>setName(name)}
                            />
                            <TextInput
                                placeholder='Enter New Email'
                                placeholderTextColor={"black"}
                                style={ProfileStyle.input}
                                keyboardType={"email-address"}
                                onChangeText={(mail)=>setMail(mail)}
                            />
                            <TextInput
                                placeholder='Enter New Number'
                                placeholderTextColor={"black"}
                                style={ProfileStyle.input}
                                onChangeText={(phone)=>setPhone(phone)}
                                keyboardType={"phone-pad"}
                            />
                        </View>
                        <LinearGradient colors={['#FF7400','#FC8521', '#FA943E']} 
                            style={ProfileStyle.customButton}
                            
                        >
                            <TouchableOpacity onPress={()=>setModalVisible(false)} 
                                style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                                <Text style={ProfileStyle.txt}>Save</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </LinearGradient> 
                </View>
          </Modal>
        </ImageBackground>
    )
}
export default Profile;