import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
import groupCss from '../Styles/CreateGroupCss';
import DocumentPicker from 'react-native-document-picker';
import GroupCreate from '../Server/GroupCreate';
import * as mutations from '../graphql/mutations';
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify';
const CreateGroup = () => {
    const [image, setImage] = useState(null);
    const [grpName, setGrpName] = useState(null);
    const [grpDesc, setGrpDesc] = useState(null);
    const [clicked, setClicked] = useState(false)
    const [authedUser, setAuthedUser] = useState("");
    const [id, setId] = useState("");
    function jene() {
        setImage()
    }
    const addFile = async () => {
        try {
            const res = await DocumentPicker.pick({ type: [DocumentPicker.types.allFiles], });
            setImage(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
                throw err;
            }
        }
    }
    const setGroupDetails = async () => {

        if (clicked)
            return;
        try {
            setClicked(true)
            const groupDetails = {
                GroupName: grpName,
                GroupDescription: grpDesc,
                GroupImageUrlPath: image,
                lastSeenMessageID: ""

            }


            const currentUser = await Auth.currentAuthenticatedUser();
            setAuthedUser(currentUser.attributes.email);
            console.log(currentUser.attributes.email);
            const auth = currentUser.attributes.email;
            console.log(auth)
            const groupData = await API.graphql({
                query: mutations.createGroup,
                variables: {
                    input: groupDetails
                }
            })
            console.log(groupData)
            const idd = groupData.data.createGroup.id
            console.log(idd)
            // setId(groupData.data.createGroup.id)
            // console.log(id)
            const demo = {
                userID: auth,
                groupID: idd
            }
            const grpData = await API.graphql({
                query: mutations.createUserGroup,
                variables: {
                    input: demo
                }
            })
            console.log(grpData)

            setClicked(false)

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <View style={groupCss.container}>
                <View style={groupCss.background} />
                <Text style={groupCss.title}>Create Group....</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={groupCss.inputText}>
                        <TextInput
                            placeholder='Group Name'
                            placeholderTextColor={"black"}
                            style={groupCss.input}
                            onChangeText={(name) => setGrpName(name)}
                        />
                    </View>
                    <TextInput
                        placeholder='Description'
                        placeholderTextColor={"black"}
                        style={groupCss.textarea}
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={(desc) => setGrpDesc(desc)}
                    />
                    <View style={groupCss.imageButton} onChangeText={(image) => { setImage(image.uri), console.log(image) }}>
                        {image == null ? null : <Image
                            style={groupCss.iconStyle}
                            source={{ uri: image[0].uri }}

                        />}
                        <Text style={{ fontWeight: "bold", color: "black" }}>
                            {image == null ? "Select Image" : "Image Selected"}
                        </Text>
                        <TouchableOpacity onPress={addFile}>
                            <Image
                                style={groupCss.iconStyle}
                                source={require('../Assets/addphoto.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={groupCss.btnBody}
                    onPress={setGroupDetails}
                >
                    {
                        clicked ?
                            <ActivityIndicator color={"blue"} size={30} /> :
                            <Text style={groupCss.btnText}>Create</Text>
                    }
                </TouchableOpacity>
            </View>
        </>
    );
};
export default CreateGroup;
