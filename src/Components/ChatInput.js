import React ,{ useState , TouchableOpacity } from 'react';
import { View , Text , TextInput , Image } from 'react-native';
import FileStyle from '../Styles/FileStyle';
const ChatInput=(props)=>{
    const {getGroupMessage} = props;
    return(
        <View  style={FileStyle.chatIPStyle}>
            <TextInput
                placeholder={"Message..."}
                placeholderTextColor={"black"}
                style={FileStyle.chatInput}
                onChangeText={(message)=>getGroupMessage(message)}
            />
        </View>    
    )
}
export default ChatInput;