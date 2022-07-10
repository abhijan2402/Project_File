/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessageByGroup = /* GraphQL */ `
  subscription OnCreateMessageByGroup($groupID: ID!) {
    onCreateMessageByGroup(groupID: $groupID) {
      id
      Message
      createdAt
      groupID
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserGroupTable = /* GraphQL */ `
  subscription OnCreateUserGroupTable {
    onCreateUserGroupTable {
      id
      userID
      groupID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserGroupTable = /* GraphQL */ `
  subscription OnUpdateUserGroupTable {
    onUpdateUserGroupTable {
      id
      userID
      groupID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserGroupTable = /* GraphQL */ `
  subscription OnDeleteUserGroupTable {
    onDeleteUserGroupTable {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      Message
      createdAt
      groupID
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      Message
      createdAt
      groupID
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      Message
      createdAt
      groupID
      updatedAt
    }
  }
`;
