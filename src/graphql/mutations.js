/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserGroup = /* GraphQL */ `
  mutation CreateUserGroup(
    $input: CreateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    createUserGroup(input: $input, condition: $condition) {
      id
      userID
      groupID
      createdAt
      updatedAt
    }
  }
`;
export const updateUserGroup = /* GraphQL */ `
  mutation UpdateUserGroup(
    $input: UpdateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    updateUserGroup(input: $input, condition: $condition) {
      id
      userID
      groupID
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserGroup = /* GraphQL */ `
  mutation DeleteUserGroup(
    $input: DeleteUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    deleteUserGroup(input: $input, condition: $condition) {
      id
      userID
      groupID
      createdAt
      updatedAt
    }
  }
`;
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createFiles = /* GraphQL */ `
  mutation CreateFiles(
    $input: CreateFilesInput!
    $condition: ModelFilesConditionInput
  ) {
    createFiles(input: $input, condition: $condition) {
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
export const updateFiles = /* GraphQL */ `
  mutation UpdateFiles(
    $input: UpdateFilesInput!
    $condition: ModelFilesConditionInput
  ) {
    updateFiles(input: $input, condition: $condition) {
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
export const deleteFiles = /* GraphQL */ `
  mutation DeleteFiles(
    $input: DeleteFilesInput!
    $condition: ModelFilesConditionInput
  ) {
    deleteFiles(input: $input, condition: $condition) {
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
