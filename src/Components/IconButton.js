import React , { useState } from 'react';
import { View , Image , TouchableOpacity } from 'react-native';
import FileStyle from '../Styles/FileStyle';
const IconButton = (props) => {
    const{ imageUrl , onpress }=props;
    return(
        <TouchableOpacity onPress={onpress}>
            <Image
                style={[FileStyle.iconPic,{marginRight:10}]}
                source={imageUrl}
            />
        </TouchableOpacity>
    )
}
export default IconButton;