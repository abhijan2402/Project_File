/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onMessagebyGroupId = /* GraphQL */ `
  subscription OnMessagebyGroupId($groupMessagesId: ID!) {
    onMessagebyGroupId(groupMessagesId: $groupMessagesId) {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
      userUserMessageId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      email
      name
      Phone
      groups {
        items {
          id
          userID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      userFile {
        items {
          id
          filename
          fileDescription
          filePath
          groupFilesId
          userFilesId
          createdAt
          updatedAt
          userUserFileId
        }
        nextToken
      }
      userMessage {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
          userUserMessageId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      email
      name
      Phone
      groups {
        items {
          id
          userID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      userFile {
        items {
          id
          filename
          fileDescription
          filePath
          groupFilesId
          userFilesId
          createdAt
          updatedAt
          userUserFileId
        }
        nextToken
      }
      userMessage {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
          userUserMessageId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      email
      name
      Phone
      groups {
        items {
          id
          userID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      userFile {
        items {
          id
          filename
          fileDescription
          filePath
          groupFilesId
          userFilesId
          createdAt
          updatedAt
          userUserFileId
        }
        nextToken
      }
      userMessage {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
          userUserMessageId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
      GroupName
      GroupDescription
      GroupImageUrlPath
      users {
        items {
          id
          userID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      lastSeenMessageID
      lastSeenMessege {
        id
        message
        createdAt
        groupMessagesId
        updatedAt
        userUserMessageId
      }
      messages {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
          userUserMessageId
        }
        nextToken
      }
      files {
        items {
          id
          filename
          fileDescription
          filePath
          groupFilesId
          userFilesId
          createdAt
          updatedAt
          userUserFileId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
      id
      GroupName
      GroupDescription
      GroupImageUrlPath
      users {
        items {
          id
          userID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      lastSeenMessageID
      lastSeenMessege {
        id
        message
        createdAt
        groupMessagesId
        updatedAt
        userUserMessageId
      }
      messages {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
          userUserMessageId
        }
        nextToken
      }
      files {
        items {
          id
          filename
          fileDescription
          filePath
          groupFilesId
          userFilesId
          createdAt
          updatedAt
          userUserFileId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
      id
      GroupName
      GroupDescription
      GroupImageUrlPath
      users {
        items {
          id
          userID
          groupID
          createdAt
          updatedAt
        }
        nextToken
      }
      lastSeenMessageID
      lastSeenMessege {
        id
        message
        createdAt
        groupMessagesId
        updatedAt
        userUserMessageId
      }
      messages {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
          userUserMessageId
        }
        nextToken
      }
      files {
        items {
          id
          filename
          fileDescription
          filePath
          groupFilesId
          userFilesId
          createdAt
          updatedAt
          userUserFileId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFiles = /* GraphQL */ `
  subscription OnCreateFiles {
    onCreateFiles {
      id
      filename
      fileDescription
      filePath
      groupFilesId
      userFilesId
      createdAt
      updatedAt
      userUserFileId
    }
  }
`;
export const onUpdateFiles = /* GraphQL */ `
  subscription OnUpdateFiles {
    onUpdateFiles {
      id
      filename
      fileDescription
      filePath
      groupFilesId
      userFilesId
      createdAt
      updatedAt
      userUserFileId
    }
  }
`;
export const onDeleteFiles = /* GraphQL */ `
  subscription OnDeleteFiles {
    onDeleteFiles {
      id
      filename
      fileDescription
      filePath
      groupFilesId
      userFilesId
      createdAt
      updatedAt
      userUserFileId
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
      userUserMessageId
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
      userUserMessageId
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
      userUserMessageId
    }
  }
`;
export const onCreateUserGroup = /* GraphQL */ `
  subscription OnCreateUserGroup {
    onCreateUserGroup {
      id
      userID
      groupID
      user {
        email
        name
        Phone
        groups {
          nextToken
        }
        userFile {
          nextToken
        }
        userMessage {
          nextToken
        }
        createdAt
        updatedAt
      }
      group {
        id
        GroupName
        GroupDescription
        GroupImageUrlPath
        users {
          nextToken
        }
        lastSeenMessageID
        lastSeenMessege {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
          userUserMessageId
        }
        messages {
          nextToken
        }
        files {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserGroup = /* GraphQL */ `
  subscription OnUpdateUserGroup {
    onUpdateUserGroup {
      id
      userID
      groupID
      user {
        email
        name
        Phone
        groups {
          nextToken
        }
        userFile {
          nextToken
        }
        userMessage {
          nextToken
        }
        createdAt
        updatedAt
      }
      group {
        id
        GroupName
        GroupDescription
        GroupImageUrlPath
        users {
          nextToken
        }
        lastSeenMessageID
        lastSeenMessege {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
          userUserMessageId
        }
        messages {
          nextToken
        }
        files {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserGroup = /* GraphQL */ `
  subscription OnDeleteUserGroup {
    onDeleteUserGroup {
      id
      userID
      groupID
      user {
        email
        name
        Phone
        groups {
          nextToken
        }
        userFile {
          nextToken
        }
        userMessage {
          nextToken
        }
        createdAt
        updatedAt
      }
      group {
        id
        GroupName
        GroupDescription
        GroupImageUrlPath
        users {
          nextToken
        }
        lastSeenMessageID
        lastSeenMessege {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
          userUserMessageId
        }
        messages {
          nextToken
        }
        files {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
