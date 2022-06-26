/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
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
        password
        phoneNumber
        createdAt
        updatedAt
        owner
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
        GroupImageUrl
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const usersByGroupName = /* GraphQL */ `
  query UsersByGroupName(
    $GroupName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByGroupName(
      GroupName: $GroupName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        GroupName
        GroupDescription
        GroupImageUrl
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserGroup = /* GraphQL */ `
  query GetUserGroup($id: ID!) {
    getUserGroup(id: $id) {
      id
      userID
      groupID
      createdAt
      updatedAt
    }
  }
`;
export const listUserGroups = /* GraphQL */ `
  query ListUserGroups(
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        groupID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const groupByUserName = /* GraphQL */ `
  query GroupByUserName(
    $userID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupByUserName(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        groupID
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
      userUserFileId
      createdAt
      updatedAt
      owner
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
        userUserFileId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
