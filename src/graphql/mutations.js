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
      Groups {
        id
        GroupName
        GroupDescription
        GroupImageUrlPath
        users {
          email
          name
          Phone
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
      Groups {
        id
        GroupName
        GroupDescription
        GroupImageUrlPath
        users {
          email
          name
          Phone
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
      Groups {
        id
        GroupName
        GroupDescription
        GroupImageUrlPath
        users {
          email
          name
          Phone
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserGroupTable = /* GraphQL */ `
  mutation CreateUserGroupTable(
    $input: CreateUserGroupTableInput!
    $condition: ModelUserGroupTableConditionInput
  ) {
    createUserGroupTable(input: $input, condition: $condition) {
      id
      userID
      groupID
      createdAt
      updatedAt
    }
  }
`;
export const updateUserGroupTable = /* GraphQL */ `
  mutation UpdateUserGroupTable(
    $input: UpdateUserGroupTableInput!
    $condition: ModelUserGroupTableConditionInput
  ) {
    updateUserGroupTable(input: $input, condition: $condition) {
      id
      userID
      groupID
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserGroupTable = /* GraphQL */ `
  mutation DeleteUserGroupTable(
    $input: DeleteUserGroupTableInput!
    $condition: ModelUserGroupTableConditionInput
  ) {
    deleteUserGroupTable(input: $input, condition: $condition) {
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
      GroupImageUrlPath
      users {
        email
        name
        Phone
        Groups {
          id
          GroupName
          GroupDescription
          GroupImageUrlPath
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        email
        name
        Phone
        Groups {
          id
          GroupName
          GroupDescription
          GroupImageUrlPath
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        email
        name
        Phone
        Groups {
          id
          GroupName
          GroupDescription
          GroupImageUrlPath
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      Message
      createdAt
      groupID
      updatedAt
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
      Message
      createdAt
      groupID
      updatedAt
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
      Message
      createdAt
      groupID
      updatedAt
    }
  }
`;
