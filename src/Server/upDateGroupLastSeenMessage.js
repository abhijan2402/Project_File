import { API } from "aws-amplify";
import * as mutations from '../graphql/mutations';
const upDateGroupLastSeenMessage = async (GroupRoomID,messageID) => {
    try {
      await API.graphql({
        query:mutations.updateGroup,
        variables:{
          input:{
            id: GroupRoomID,
            lastSeenMessageID:messageID
          }
        }
      })
    } catch (error) {
      console.log(error);
    }
}  
export default upDateGroupLastSeenMessage;