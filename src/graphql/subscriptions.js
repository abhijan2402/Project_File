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
      messages {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
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
      messages {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
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
      messages {
        items {
          id
          message
          createdAt
          groupMessagesId
          updatedAt
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
    }
  }
`;
export const onCreateUserGroupsMapping = /* GraphQL */ `
  subscription OnCreateUserGroupsMapping {
    onCreateUserGroupsMapping {
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
export const onUpdateUserGroupsMapping = /* GraphQL */ `
  subscription OnUpdateUserGroupsMapping {
    onUpdateUserGroupsMapping {
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
export const onDeleteUserGroupsMapping = /* GraphQL */ `
  subscription OnDeleteUserGroupsMapping {
    onDeleteUserGroupsMapping {
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
