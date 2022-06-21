import { API , Auth } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
const GroupCreate=async(GroupName,GroupDesc,GroupUrl)=>{
    try {
        const authedUser=await Auth.currentAuthenticatedUser(); 
        const groupDetails={
            GroupName: GroupName,
            GroupDescription: GroupDesc,
            GroupImageUrl: GroupUrl,
        }
        // console.log(groupDetails)
        const groupData=await API.graphql({
            query:mutations.createGroup,
            variables:{
                input:groupDetails
            }
        })
        // console.log(groupData)
        const userGroup={
            userID: authedUser.attributes.email,
            groupID:groupData.data.createGroup.id 
        }
        const userData=await API.graphql({
            query:mutations.createUserGroup,
            variables:{
                input:userGroup
            }
        })
        // console.log(userData)
        return true;
    } catch (error) {
        console.log(error);
    }
}
export default GroupCreate;