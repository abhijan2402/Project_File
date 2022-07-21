import React from 'react';
import { View , Text , Image } from 'react-native';
import FileStyle from '../Styles/FileStyle';
const GroupChatHeader=(props)=>{
    const {groupTitle} = props;
    return(
        <View style={FileStyle.titleView}>
            <Image 
              style={FileStyle.image}
              source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7imXJMeK9b42t8JBjKxYP2zJd8MVrbVNEAg&usqp=CAU"}}
            />
            <Text style={FileStyle.title}>
              {groupTitle}
            </Text>
          </View>
    )
}
export default GroupChatHeader;