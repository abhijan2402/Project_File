/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFiles = /* GraphQL */ `
  query GetFiles($id: ID!) {
    getFiles(id: $id) {
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
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFilesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      message
      createdAt
      groupMessagesId
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        createdAt
        groupMessagesId
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserGroupsMapping = /* GraphQL */ `
  query GetUserGroupsMapping($id: ID!) {
    getUserGroupsMapping(id: $id) {
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
export const listUserGroupsMappings = /* GraphQL */ `
  query ListUserGroupsMappings(
    $filter: ModelUserGroupsMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGroupsMappings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        groupID
        user {
          email
          name
          Phone
          createdAt
          updatedAt
        }
        group {
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
      nextToken
    }
  }
`;
export const mesageByGroupName = /* GraphQL */ `
  query MesageByGroupName(
    $groupMessagesId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mesageByGroupName(
      groupMessagesId: $groupMessagesId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        message
        createdAt
        groupMessagesId
        updatedAt
      }
      nextToken
    }
  }
`;
