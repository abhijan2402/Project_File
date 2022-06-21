/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFilesByGroupId = /* GraphQL */ `
  subscription OnCreateFilesByGroupId($groupFilesId: ID!) {
    onCreateFilesByGroupId(groupFilesId: $groupFilesId) {
      id
      filename
      fileDescription
      filePath
      groupFilesId
      userUserFileId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      email
      name
      password
      phoneNumber
      Groups {
        id
        GroupName
        GroupDescription
        GroupImageUrl
        createdAt
        updatedAt
      }
      userFile {
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
      password
      phoneNumber
      Groups {
        id
        GroupName
        GroupDescription
        GroupImageUrl
        createdAt
        updatedAt
      }
      userFile {
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
      password
      phoneNumber
      Groups {
        id
        GroupName
        GroupDescription
        GroupImageUrl
        createdAt
        updatedAt
      }
      userFile {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserGroup = /* GraphQL */ `
  subscription OnCreateUserGroup {
    onCreateUserGroup {
      id
      userID
      groupID
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
      GroupImageUrl
      users {
        email
        name
        password
        phoneNumber
        createdAt
        updatedAt
      }
      files {
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
      GroupImageUrl
      users {
        email
        name
        password
        phoneNumber
        createdAt
        updatedAt
      }
      files {
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
      GroupImageUrl
      users {
        email
        name
        password
        phoneNumber
        createdAt
        updatedAt
      }
      files {
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
      userUserFileId
      createdAt
      updatedAt
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
      userUserFileId
      createdAt
      updatedAt
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
      userUserFileId
      createdAt
      updatedAt
    }
  }
`;
