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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
      userFilesId
      createdAt
      updatedAt
      userUserFileId
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
      userFilesId
      createdAt
      updatedAt
      userUserFileId
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
      userFilesId
      createdAt
      updatedAt
      userUserFileId
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
      userUserMessageId
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
      userUserMessageId
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
      userUserMessageId
    }
  }
`;
export const createUserGroupsMapping = /* GraphQL */ `
  mutation CreateUserGroupsMapping(
    $input: CreateUserGroupsMappingInput!
    $condition: ModelUserGroupsMappingConditionInput
  ) {
    createUserGroupsMapping(input: $input, condition: $condition) {
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
export const updateUserGroupsMapping = /* GraphQL */ `
  mutation UpdateUserGroupsMapping(
    $input: UpdateUserGroupsMappingInput!
    $condition: ModelUserGroupsMappingConditionInput
  ) {
    updateUserGroupsMapping(input: $input, condition: $condition) {
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
export const deleteUserGroupsMapping = /* GraphQL */ `
  mutation DeleteUserGroupsMapping(
    $input: DeleteUserGroupsMappingInput!
    $condition: ModelUserGroupsMappingConditionInput
  ) {
    deleteUserGroupsMapping(input: $input, condition: $condition) {
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
