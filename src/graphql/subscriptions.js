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
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
        owner
      }
      userFile {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
        owner
      }
      userFile {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
        owner
      }
      userFile {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($owner: String) {
    onCreateGroup(owner: $owner) {
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
        owner
      }
      files {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($owner: String) {
    onUpdateGroup(owner: $owner) {
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
        owner
      }
      files {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($owner: String) {
    onDeleteGroup(owner: $owner) {
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
        owner
      }
      files {
        nextToken
      }
      createdAt
      updatedAt
      owner
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
export const onCreateFiles = /* GraphQL */ `
  subscription OnCreateFiles($owner: String) {
    onCreateFiles(owner: $owner) {
      id
      filename
      fileDescription
      filePath
      groupFilesId
      userUserFileId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFiles = /* GraphQL */ `
  subscription OnUpdateFiles($owner: String) {
    onUpdateFiles(owner: $owner) {
      id
      filename
      fileDescription
      filePath
      groupFilesId
      userUserFileId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFiles = /* GraphQL */ `
  subscription OnDeleteFiles($owner: String) {
    onDeleteFiles(owner: $owner) {
      id
      filename
      fileDescription
      filePath
      groupFilesId
      userUserFileId
      createdAt
      updatedAt
      owner
    }
  }
`;
