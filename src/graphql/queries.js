/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
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
      nextToken
    }
  }
`;
export const getUserGroupTable = /* GraphQL */ `
  query GetUserGroupTable($id: ID!) {
    getUserGroupTable(id: $id) {
      id
      userID
      groupID
      createdAt
      updatedAt
    }
  }
`;
export const listUserGroupTables = /* GraphQL */ `
  query ListUserGroupTables(
    $filter: ModelUserGroupTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGroupTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
          email
          name
          Phone
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
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      Message
      createdAt
      groupID
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
        Message
        createdAt
        groupID
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
    $filter: ModelUserGroupTableFilterInput
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
