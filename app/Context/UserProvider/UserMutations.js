import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
    mutation createUser($email: String!, $userId: ID!, $createdAt: String!) {
        createUser(email: $email, userId: $userId, createdAt: $createdAt) {
            userId
            id
            email
            createdAt
        }
    }
`;
